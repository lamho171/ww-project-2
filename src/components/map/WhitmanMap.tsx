import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { locations } from '../../content/locations'

interface WhitmanMapProps {
  selectedId: string | null
  onSelect: (id: string) => void
}

function createIcon(selected: boolean) {
  return L.divIcon({
    className: '',
    html: `<span class="leaflet-pin${selected ? ' is-selected' : ''}" aria-hidden="true"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  })
}

export function WhitmanMap({ selectedId, onSelect }: WhitmanMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<Record<string, L.Marker>>({})
  const readyRef = useRef(false)

  // Create the map once.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      minZoom: 12,
      maxZoom: 17,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]))

    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: createIcon(false),
        title: location.name,
        keyboard: true,
      })
      marker.bindTooltip(location.name, { direction: 'top', offset: [0, -10] })
      marker.on('click', () => onSelect(location.id))
      marker.addTo(map)
      markersRef.current[location.id] = marker
    })

    mapRef.current = map

    // The container has no measured size on first paint (aspect-ratio box, CSS not
    // yet applied), so Leaflet's initial size is wrong until we invalidate it.
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize()
    })
    resizeObserver.observe(containerRef.current)

    requestAnimationFrame(() => {
      map.invalidateSize()
      map.fitBounds(bounds, { padding: [32, 32] })
      // panTo (below) needs a map that has already been sized and zoomed at least
      // once — calling it any earlier can make Leaflet compute an invalid zoom and
      // try to load an unbounded number of tiles.
      readyRef.current = true
    })

    return () => {
      readyRef.current = false
      resizeObserver.disconnect()
      map.remove()
      mapRef.current = null
      markersRef.current = {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep marker highlight in sync with the selected location.
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      marker.setIcon(createIcon(id === selectedId))
    })
  }, [selectedId])

  // Fly to the selected marker so the panel and map stay connected.
  useEffect(() => {
    if (!selectedId || !mapRef.current || !readyRef.current) return
    const location = locations.find((l) => l.id === selectedId)
    if (location) {
      mapRef.current.panTo([location.lat, location.lng])
    }
  }, [selectedId])

  return (
    <div className="map-frame">
      <div
        ref={containerRef}
        className="leaflet-map"
        role="group"
        aria-label="Map of places connected to the ferry archive"
      />
      <div className="map-chip-list" role="group" aria-label="Jump to a location">
        {locations.map((location) => (
          <button
            key={location.id}
            type="button"
            className={`chip${location.id === selectedId ? ' is-active' : ''}`}
            aria-pressed={location.id === selectedId}
            onClick={() => onSelect(location.id)}
          >
            {location.name}
          </button>
        ))}
      </div>
    </div>
  )
}

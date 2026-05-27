/* Verified Unsplash photos (HEAD-checked 200) */
const photos = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?auto=format&fit=crop&w=900&q=80',
    alt: 'Arborist climbing high in a tree to perform crown work',
    caption: 'Tree Climbing & Crown Work',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1684332666088-f35b252b5aca?auto=format&fit=crop&w=900&q=80',
    alt: 'Chainsaw cutting through a large tree limb during removal',
    caption: 'Tree Removal: Cutting Phase',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1748073813267-af0cd7fddbaa?auto=format&fit=crop&w=900&q=80',
    alt: 'Tree service workers operating machinery on a job site',
    caption: 'Crew & Equipment at Work',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1695462935702-05bb400b81ba?auto=format&fit=crop&w=900&q=80',
    alt: 'Large mature tree standing in a residential yard',
    caption: 'Before: Large Oak Assessment',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1590385547262-2e33b0785dcb?auto=format&fit=crop&w=900&q=80',
    alt: 'Green tree growing near a residential home',
    caption: 'Residential Tree Proximity Work',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1591091421731-22bf7044c1cb?auto=format&fit=crop&w=900&q=80',
    alt: 'Tree standing in a grassy yard',
    caption: 'Yard Clearance Job',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1615836671441-cc13250c2158?auto=format&fit=crop&w=900&q=80',
    alt: 'Pile of cut wood logs after a tree removal',
    caption: 'Cut Logs: Post Removal',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1596628930480-540b65f6f0a6?auto=format&fit=crop&w=900&q=80',
    alt: 'Stacked timber and logs after a clearing job',
    caption: 'Timber Cleared from Property',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1653751749028-d071e5209218?auto=format&fit=crop&w=900&q=80',
    alt: 'Grassy field with trees and hills in the background',
    caption: 'Property After Full Clearing',
  },
]

export default function Gallery() {
  return (
    <>
      {/* Header */}
      <div
        className="pt-28 pb-16 px-6 md:px-12 lg:px-16"
        style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">Our Work</span>
          <h1
            className="mt-3 mb-4"
            style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-heading)' }}
          >
            Gallery
          </h1>
          <p className="max-w-xl text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Removal jobs, trimming work, storm cleanup, and post-job site conditions
            across the Kansas City metro.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {photos.map((p) => (
              <div
                key={p.id}
                className="group relative overflow-hidden"
                style={{ background: 'var(--color-surface)' }}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={900}
                    height={675}
                  />
                </div>
                <div
                  className="p-4"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                    {p.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const photos = [
  {
    label: "Mountain Sunrise",
    description: "Caught this golden hour view from the peak after a 3-hour early morning hike.",
    emoji: "🏔️",
  },
  {
    label: "Old Growth Forest",
    description:
      "A quiet trail through centuries-old trees — the kind of silence that resets your mind.",
    emoji: "🌲",
  },
  {
    label: "Wildflower Meadow",
    description: "Late spring bloom in the valley. Hundreds of species competing for sunlight.",
    emoji: "🌸",
  },
  {
    label: "Coastal Tide Pools",
    description:
      "Exploring the rocky shoreline at low tide — sea stars, anemones, and tiny crabs.",
    emoji: "🌊",
  },
  {
    label: "Desert Dusk",
    description:
      "The desert sky right after sunset — deep purples and burnt oranges you can't do justice to in a photo.",
    emoji: "🌵",
  },
  {
    label: "Winter Creek",
    description: "A partially frozen stream winding through bare birch trees in early February.",
    emoji: "❄️",
  },
];

export default function Nature() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-2 text-stone-800">Nature</h2>
      <p className="text-stone-600 mb-8">
        A few favorite moments from trails, parks, and wild places.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {photos.map((photo) => (
          <div
            key={photo.label}
            className="bg-white rounded-xl p-5 shadow-sm border border-stone-200 flex flex-col items-center text-center gap-2"
          >
            <span className="text-5xl">{photo.emoji}</span>
            <h3 className="font-semibold text-stone-800">{photo.label}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{photo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

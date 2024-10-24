import Image from 'next/image'

export default function FeaturedInsight() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="project">
            <Image src="/images/project1.jpg" alt="Project 1" width={400} height={300} className="rounded-lg" />
            <p className="mt-4 text-center">Building with precision and speed</p>
          </div>
          <div className="project">
            <Image src="/images/project2.jpg" alt="Project 2" width={400} height={300} className="rounded-lg" />
            <p className="mt-4 text-center">Innovative technology for construction</p>
          </div>
          <div className="project">
            <Image src="/images/project3.jpg" alt="Project 3" width={400} height={300} className="rounded-lg" />
            <p className="mt-4 text-center">Developing communities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

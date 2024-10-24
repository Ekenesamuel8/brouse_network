export default function Clients() {
    return (
      <section className="bg-green-200 py-16">
        <div className="container mx-auto grid grid-cols-3 gap-8 text-center">
          <div className="value-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">For Construction Companies</h3>
            <p className="mt-4">Enhancing performance and safety with innovative technology.</p>
          </div>
          <div className="value-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">For Government Investors</h3>
            <p className="mt-4">Streamlining projects for efficiency and success.</p>
          </div>
          <div className="value-card p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">For Private Developers</h3>
            <p className="mt-4">Customized solutions for real estate and infrastructure projects.</p>
          </div>
        </div>
      </section>
    )
  }
  
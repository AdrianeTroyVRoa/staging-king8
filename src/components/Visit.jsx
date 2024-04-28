import location from "../assets/office.png";

function Visit() {
  return (
    <section className="bg-zinc-100 bg-cover bg-center flex items-center justify-center">
      <div className="flex my-20 mx-10">
        <div className="lg:w-1/2 invisible lg:visible">
          <img src={location}/>
        </div>
        <div className="lg:w-1/2 text-blue-950 ml-1">
          <h1 className="font-bold text-5xl">VISIT OUR OFFICE</h1>
          <p className="text-lg">
            Discover genuine quality plastics crafted right here in the heart of
            Cagayan de Oro, Philippines. Nestled within the bustling district of
            Baloy, our manufacturing hub at Bldg 104 Kimwa is more than just an
            address; it's a testament to our commitment to local craftsmanship
            and excellence. From meticulous production processes to premium
            materials sourced locally, each product reflects the rich tapestry
            of our community and the pride we take in delivering nothing short
            of the finest quality. At our facility, innovation meets tradition,
            resulting in plastics that not only meet but exceed your
            expectations. Experience the difference of authentic Filipino
            craftsmanship with our range of high-quality plastics, proudly made
            in Cagayan de Oro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Visit;

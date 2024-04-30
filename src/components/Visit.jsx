function Visit() {
  return (
    <section className="bg-zinc-100 bg-cover bg-center flex items-center justify-center" id="visit">
      <div className="flex lg:flex-row sm:flex-col container p-20 my-20 mx-10">
        <div className="flex lg:w-1/2 xs:h-1/2 mr-5 item-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.1489350543252!2d124.70756480270668!3d8.470388325831761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d8088225c21%3A0x69eb7486adf52c59!2sMindanao%20King8%20Plastics!5e0!3m2!1sen!2sph!4v1714371034718!5m2!1sen!2sph"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/2 xs:h-1/2 text-blue-950 ml-5 container">
          <h1 className="font-bold text-5xl">VISIT OUR OFFICE</h1>
          <p className="text-lg text-justify">
            Discover genuine quality plastics crafted right here in the heart of
            Cagayan de Oro, Philippines. Nestled within the bustling district of
            Baloy, our manufacturing hub at Bldg 104 Kimwa is more than just an
            address; it's a testament to our commitment to local craftsmanship
            and excellence. From meticulous production processes to premium
            materials, each product reflects the rich tapestry of our community
            and the pride we take in delivering nothing short of the finest
            quality. At our facility, innovation meets tradition, resulting in
            plastics that not only meet but exceed your expectations. Experience
            the difference of authentic Filipino craftsmanship with our range of
            high-quality plastics, proudly made in Cagayan de Oro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Visit;

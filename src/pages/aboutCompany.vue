<template>
  <div class="bg-gray-100">
    <div
      class="w-full h-96 bg-no-repeat bg-cover bg-center"
      style="
        background-image: url('https://i.pinimg.com/originals/bd/7c/02/bd7c023464c09a677651d5204b6dd6b6.jpg');
      "
    >
      <div class="px-96 pt-40 text-center">
        <div class="text-5xl text-white py-5">About</div>
      </div>
    </div>

    <div class="mx-36 pb-24">
      <div class="text-3xl text-blue-800 text-bold py-28 text-center">
        About Advance Safety Engineering
      </div>
      <p class="text-xl">
        Welcome to Advance Safety Engineering, your dedicated technology
        partner. We are passionate about technology and committed to delivering
        exceptional IT solutions tailored to your unique needs. Here’s why you
        should choose us:
      </p>
    </div>

    <section>
      <div class="row mx-36 pb-20">
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Expertise You Can Trust
          </div>
          <p class="text-lg">
            Our team of skilled engineers and developers brings a wealth of
            experience to the table. We have successfully delivered a wide range
            of projects, demonstrating our ability to tackle complex challenges
            and provide solutions that meet and exceed expectations.
          </p>
        </div>
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Comprehensive IT Solutions
          </div>
          <p class="text-lg">
            Whether you require custom software development, software
            maintenance, or robust security solutions, we’ve got you covered.
            Our full-spectrum IT services are designed to align seamlessly with
            your business objectives.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="row mx-36 pb-20">
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Robust Security
          </div>
          <p class="text-lg">
            In today’s digital landscape, data security is paramount. We
            prioritize cybersecurity in all our projects, ensuring that your
            systems and sensitive information remain protected against evolving
            threats.
          </p>
        </div>
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Client-Centric Approach
          </div>
          <p class="text-lg">
            We value strong partnerships with our clients. Your success is our
            success, and we’re dedicated to understanding your unique needs and
            challenges. This client-centric approach allows us to deliver
            tailored solutions that drive growth and efficiency for your
            business.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="row mx-36 pb-20">
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Innovation at Our Core
          </div>
          <p class="text-lg">
            We stay at the forefront of industry trends and emerging
            technologies, enabling us to deliver forward-thinking solutions that
            keep you competitive in a rapidly evolving tech world
          </p>
        </div>
        <div class="col-6 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">
            Commitment to Excellence
          </div>
          <p class="text-lg">
            Our commitment to quality is unwavering. We adhere to industry best
            practices, conduct rigorous testing, and continuously refine our
            processes to ensure that every project we undertake is a testament
            to excellence.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="row px-36 py-20 bg-gray-200">
        <div class="col-4 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">Mission</div>
          <p class="text-lg">
            At
            <span class="text-red-800 text-bold"
              >Advance Safety Engineering</span
            >
            , our mission is to empower businesses through innovative technology
            solutions. We are dedicated to providing exceptional IT services
            that drive efficiency, enhance security, and enable our clients to
            thrive in the digital era.
          </p>
        </div>

        <div class="col-4 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10">Vision</div>
          <p class="text-lg">
            Our vision is to be a leading force in the tech industry, recognized
            for our unwavering commitment to excellence and our ability to
            deliver cutting-edge solutions that transform businesses worldwide.
            We aspire to shape the future of technology, one successful
            partnership at a time.
          </p>
        </div>

        <div class="col-4 px-10">
          <div class="text-2xl text-green-700 text-bold pb-10 pl-3">Values</div>
          <div class="text-lg flex">
            <div>
              <q-spinner-rings color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">value</q-tooltip>
            </div>
            <div class="pt-1">Excellence</div>
          </div>
          <div class="text-lg flex">
            <div>
              <q-spinner-rings color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">value</q-tooltip>
            </div>
            <div class="pt-1">Integrity</div>
          </div>
          <div class="text-lg flex">
            <div>
              <q-spinner-rings color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">value</q-tooltip>
            </div>
            <div class="pt-1">Innovation</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <aboutUs />
    </section>

    <q-separator></q-separator>

    <section>
      <lastSection />
    </section>
  </div>
</template>

<script>
import aboutUs from "src/components/aboutUs.vue";
import lastSection from "src/components/lastSection.vue";
export default {
  components: { aboutUs, lastSection },
};
</script>

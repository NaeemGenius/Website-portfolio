<template>
  <div class="bg-gray-100">
    <div
      class="w-full h-screen bg-no-repeat bg-cover"
      style="
        background-image: url('https://i.pinimg.com/736x/30/8f/2f/308f2fd627c36e007527bc50337f6c7b.jpg');
      "
    >
      <div class="px-96 pt-32 text-center">
        <div class="text-4xl text-white py-5">Welcome</div>
        <div class="text-6xl text-yellow-300 py-5">
          Advance Safety Engineering
        </div>
        <p class="text-white text-lg">
          We are a cutting-edge tech company specializing in innovative
          solutions for a wide range of industries. Our portfolio showcases our
          expertise in developing software, hardware, and digital solutions that
          drive efficiency, enhance user experiences, and transform businesses
          in the digital age.
        </p>
        <q-btn
          to="/service"
          class="mx-3 px-16 py-5 text-lg hover:text-xl"
          no-caps
          outline
          color="primary"
          label="Services"
        />
        <q-btn
          to="/contact"
          class="mx-3 px-16 py-5 text-lg hover:text-xl"
          no-caps
          color="white"
          text-color="primary"
          label="Contact"
        />
      </div>
    </div>

    <q-section>
      <div class="flex gap-5 px-36 py-32">
        <div
          class="w-96 h-96 bg-no-repeat bg-cover bg-center ml-24 cursor-pointer shadow hover:drop-shadow-2xl rounded-md"
          style="
            background-image: url('https://t4.ftcdn.net/jpg/02/07/50/69/360_F_207506933_StbUwU42miTpdtO8lwliW9IJrqaW2m8L.jpg');
          "
        >
          <div
            class="text-slate-200 hover:text-teal-300 text-center mt-32 text-xl"
          >
            Software Development
          </div>
        </div>

        <div
          class="w-96 h-96 bg-no-repeat bg-cover bg-center ml-5 cursor-pointer hover:drop-shadow-2xl rounded-md"
          style="
            background-image: url('https://t4.ftcdn.net/jpg/02/07/50/69/360_F_207506933_StbUwU42miTpdtO8lwliW9IJrqaW2m8L.jpg');
          "
        >
          <div
            class="text-slate-200 hover:text-teal-300 text-center mt-32 text-xl"
          >
            Software Maintainance
          </div>
        </div>
        <div
          class="w-96 h-96 bg-no-repeat bg-cover bg-center ml-5 cursor-pointer hover:drop-shadow-2xl rounded-md"
          style="
            background-image: url('https://t4.ftcdn.net/jpg/02/07/50/69/360_F_207506933_StbUwU42miTpdtO8lwliW9IJrqaW2m8L.jpg');
          "
        >
          <div
            class="text-slate-200 hover:text-teal-300 text-center mt-32 text-xl"
          >
            Security Support
          </div>
        </div>
      </div>
    </q-section>

    <q-section>
      <div class="row mx-40 py-20">
        <div class="col-4 text-4xl text-black text-bold">
          Amazing Things for You
        </div>
        <div class="col-8 text-lg">
          <div class="pb-3 flex">
            <div>
              <q-spinner-ball class="text-sm" color="primary" size="2em" />

              <span class="text-bold text-emerald-600">
                Efficiency Boost :</span
              >
              Streamline operations and save time with our custom software
              solutions, like our recent project that automated inventory
              management, reducing manual errors by 75%.
            </div>
          </div>
          <div class="py-3 flex">
            <div>
              <q-spinner-ball class="text-sm" color="primary" size="2em" />

              <span class="text-bold text-emerald-600"> Peace of Mind :</span>
              Protect your data and stay ahead of cyber threats. Our advanced
              security services shield your business, just like we safeguarded
              XYZ Corp against data breaches.
            </div>
          </div>
          <div class="py-3 flex">
            <div>
              <q-spinner-ball class="text-sm" color="blue" size="2em" />
              <span class="text-bold text-emerald-600">
                Tailored Support :</span
              >
              Experience personalized service with solutions crafted to your
              needs. Our dedicated team is always by your side, ensuring smooth
              tech operations.
            </div>
          </div>
        </div>
      </div>
    </q-section>
    <q-section>
      <div
        class="w-full h-2/3 bg-no-repeat bg-cover"
        style="
          background-image: url('https://timelinecovers.pro/facebook-cover/download/black-background-for-any-business-message-facebook-cover.jpg');
        "
      >
        <div class="px-96 py-44 text-center">
          <div class="text-4xl text-white py-5">Call To Action</div>

          <p class="text-cyan-500 text-lg">
            Ready to transform your business with innovative technology
            solutions? Contact us today, and let's embark on a journey of growth
            and success together. Your future starts here
          </p>
          <q-btn
            to="/contact"
            class="mx-3 px-16 py-5 text-lg hover:text-xl"
            no-caps
            outline
            color="primary"
            label="Contact"
          />
        </div>
      </div>
    </q-section>

    <!--
    <q-section>
      <div class="row flex px-72 py-20">
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img1.jpg"></q-img>
        </div>
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img2.jpg"></q-img>
        </div>
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img3.jpg"></q-img>
        </div>
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img4.jpg"></q-img>
        </div>
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img5.jpg"></q-img>
        </div>
        <div class="col-4 px-3 py-3">
          <q-img src="../pages/img6.jpg"></q-img>
        </div>
      </div>
    </q-section>
  -->
    <section>
      <div class="row">
        <Lightbox
          :thumbnails="lightbox.images.thumbnails"
          :largeImages="lightbox.images.large"
          :thumbnailsPath="lightbox.thumbnailsPath"
          :largePath="lightbox.largePath"
          :captions="lightbox.captions"
          class="lightBox"
        />
      </div>

      <hr />
    </section>

    <aboutUs />

    <q-separator></q-separator>

    <section>
      <lastSection />
    </section>
  </div>
</template>

<script>
import aboutUs from "src/components/aboutUs.vue";
import lastSection from "src/components/lastSection.vue";
import Lightbox from "src/components/LightBox.vue";

export default {
  data() {
    return {
      lightbox: {
        images: {
          thumbnails: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
          large: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
        },
        captions: [],
        thumbnailsPath: "/img/sea/thumbnails/",
        largePath: "/img/sea/large/",
      },
    };
  },
  components: { aboutUs, lastSection, Lightbox },
};
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
<style lang="scss">
.lightBox {
  padding: 100px;
}
.light-box {
  &__thumbnail {
    margin: 10px;
    width: 400px;
  }
}
img {
  max-width: 100%;
}
</style>

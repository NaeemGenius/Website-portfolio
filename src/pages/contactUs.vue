<template>
  <div class="bg-gray-100">
    <div
      class="w-full h-96 bg-no-repeat bg-cover bg-center"
      style="
        background-image: url('https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?w=2000');
      "
    >
      <div class="px-96 pt-40 text-center">
        <div class="text-5xl text-yellow-400 py-5">Service</div>
      </div>
    </div>

    <section>
      <div class="row py-20 px-36">
        <div class="col-4 mx-7">
          <div class="text-3xl text-bold py-10">Get in Touch</div>
          <div class="py-4">
            <div class="py-3 text-2xl">Numbers</div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>General inquries: 01749470282</p>
            </div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>General inquries: 01749470282</p>
            </div>
          </div>

          <div class="py-4">
            <div class="py-3 text-2xl">Email</div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>General Email: z.i.nayeem45@gmail.com</p>
            </div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>General Email: z.i.nayeem45@gmail.com</p>
            </div>
          </div>

          <div class="py-4">
            <div class="py-3 text-2xl">Bussiness Hour</div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>Monday — Friday 9am – 5pm</p>
            </div>
            <div class="flex text-xl">
              <q-icon class="pt-1 pr-4" name="call" />
              <p>Monday — Friday 9am – 5pm</p>
            </div>
          </div>
        </div>
        <div class="col-6 mx-7 py-10">
          <div class="text-2xl text-bold">Send Us a Message</div>

          <form class="py-8">
            <div>
              <q-input
                class="py-2"
                rounded
                outlined
                v-model="text"
                label=" Name"
              />
              <q-input
                class="py-2"
                rounded
                outlined
                v-model="text"
                label="Phone number"
              />
              <q-input
                class="py-2"
                rounded
                outlined
                v-model="text"
                label="Email"
              />
              <q-input
                class="py-3"
                v-model="textareaModel"
                filled
                clearable
                type="textarea"
                color="red-12"
                label="Massege"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />
              <q-btn
                to=""
                class="mx-3 px-16 py-3 text-lg"
                no-caps
                outline
                color="primary"
                label="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-36 py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.023519611964!2d90.39924681385392!3d23.782176793481053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76db868adf1%3A0xf459889a1357ede!2sBSTI%20Quarters!5e0!3m2!1sen!2sbd!4v1675079462877!5m2!1sen!2sbd"
          height="600"
          class="w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <section>
      <aboutUs />
    </section>
    <q-separator />
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
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

<template>
  <div
    id="app"
    class="h-auto sm:h-auto md:h-screen lg:h-screen xl:h-screen flex bg-gray-200 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row"
  >
    <!-- hCard Builder Component-->
    <form
      class="w-full sm:w-full md:w-6/12 lg:w-7/12 xl:w-7/12 bg-white px-10 py-12 order-last sm:order-last md:order-first lg:order-first xl:order-first"
    >
      <div class="py-1.5">
        <h1 class="text-3xl text-blue">hCard Builder</h1>
      </div>
      <div class="border-b-2">
        <p class="uppercase text-gray-500 mt-5">personal details</p>
      </div>
      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
      >
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="givename"
            >Given Name</label
          >
          <input
            type="text"
            id="givename"
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600"
            placeholder="Given Name"
            v-model="fields.name.givenname"
          />
        </div>
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="surname"
            >surname</label
          >
          <input
            type="text"
            id="surname"
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600"
            placeholder="Surname"
            v-model="fields.name.surname"
          />
        </div>
      </div>
      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
      >
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="email"
            >email</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            v-model="fields.email"
          />
        </div>
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="phone"
            >phone</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone"
            v-model="fields.phone"
          />
        </div>
      </div>

      <div class="border-b-2">
        <p class="uppercase text-gray-500 mt-5">address</p>
      </div>
      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
      >
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="housename"
            >house name or #</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="housename"
            type="text"
            placeholder="House name or #"
            v-model="fields.address.houseName"
            @input="updateAddressLine1"
          />
        </div>
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="street"
            >street</label
          >
          <input
            type="text"
            id="street"
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600"
            placeholder="Street"
            v-model="fields.address.street"
            @input="updateAddressLine1"
          />
        </div>
      </div>
      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
      >
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="suburb"
            >suburb</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="suburb"
            type="text"
            placeholder="Suburb"
            v-model="fields.address.suburb"
            @input="updateAddressLine2"
          />
        </div>
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="state"
            >state</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            placeholder="State"
            v-model="fields.address.state"
            @input="updateAddressLine2"
          />
        </div>
      </div>
      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
      >
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="postcode"
            >postcode</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="postcode"
            type="text"
            placeholder="Postcode"
            v-model="fields.address.postcode"
          />
        </div>
        <div class="flex-grow">
          <label class="uppercase block text-gray-700 mt-2" for="country"
            >country</label
          >
          <input
            class="w-full border broder-gray-500 rounded-md py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="Country"
            v-model="fields.address.country"
          />
        </div>
      </div>

      <div
        class="flex space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-5 xl:space-x-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row pt-10"
      >
        <label
          class="w-full text-center px-4 py-3 bg-gray-600 rounded-md shadow-md text-white font-semibold mb-5"
        >
          <input type="file" @change="onFileSelected" />
          Upload Avatar
        </label>
        <button
          class="w-full text-center px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold mb-5"
        >
          Create hCard
        </button>
      </div>
    </form>
    <div
      class="w-full sm:w-full md:w-6/12 lg:w-5/12 xl:w-5/12 flex items-center justify-center"
    >
      <BusinessCard :fields="fields" :logoUrl="logoUrl" />
    </div>
  </div>
</template>

<script>
import BusinessCard from "./../components/BusinessCard";

export default {
  name: "CardBuilderPage",
  components: {
    BusinessCard,
  },
  data() {
    return {
      fields: {
        name: {
          fullName: "Sam Smith",
          givenname: "Sam",
          surname: "Smith",
        },
        email: "sam.smith@designcrowd.com",
        phone: "02 1234 5678",
        address: {
          houseName: "2",
          street: "Hill St",
          suburb: "Surry Hills",
          state: "NSW",
          postcode: "2010",
          country: "Australia",
          addressLine1: "2 Hill St",
          addressLine2: "Surry Hills, NSW",
        },
      },
      selectedImage: null,
      logoUrl: "./images/designcrowd-logo.png",
    };
  },
  methods: {
    updateAddressLine1() {
      this.fields.address.addressLine1 = `${this.fields.address.houseName} ${this.fields.address.street}`;
    },
    updateAddressLine2() {
      this.fields.address.addressLine2 = `${this.fields.address.suburb}, ${this.fields.address.state}`;
    },
    onFileSelected(e) {
      console.log(e);
      this.selectedFile = e.target.files[0];
      if (this.selectedFile) {
        this.logoUrl = URL.createObjectURL(this.selectedFile);
      }
    },
  },
};
</script>

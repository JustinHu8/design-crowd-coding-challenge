<template>
  <div
    id="biz-card"
    class="relative biz-card bg-white border-b-2 border-gray-800"
  >
    <div class="bg-blue pt-10 pb-5 px-5">
      <h1 class="fullname text-white text-2xl">
        {{ fields.name.givenname }} {{ fields.name.surname }}
      </h1>
    </div>
    <div class="p-5">
      <div class="grid grid-cols-12 border-b-2 border-gray-300 pt-2">
        <div class="col-span-3 uppercase text-gray-500 min-w-100">email</div>
        <div class="col-span-9">{{ fields.email }}</div>
      </div>
      <div class="grid grid-cols-12 border-b-2 border-gray-300 pt-2">
        <div class="col-span-3 uppercase text-gray-500">phone</div>
        <div class="col-span-9">{{ fields.phone }}</div>
      </div>
      <div class="grid grid-cols-12 border-b-2 border-gray-300 pt-2">
        <div class="col-span-3 uppercase text-gray-500">address</div>
        <div class="col-span-9">{{ fields.address.addressLine1 }}</div>
      </div>
      <div class="grid grid-cols-12 border-b-2 border-gray-300 pt-2">
        <div class="col-span-3 uppercase text-gray-500"></div>
        <div class="col-span-9">{{ fields.address.addressLine2 }}</div>
      </div>
      <div class="grid grid-cols-12 border-b-2 border-gray-300 pt-2">
        <div class="col-span-3 uppercase text-gray-500">postcode</div>
        <div class="col-span-9 grid grid-cols-12">
          <div class="col-span-5">{{ fields.address.postcode }}</div>
          <div class="col-span-7 grid grid-cols-12">
            <div class="col-span-6 uppercase text-gray-500">country</div>
            <div class="col-span-6">{{ fields.address.country }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="logo-container absolute top-0 right-0 pt-5 pr-5">
      <img
        class="logo object-contain"
        :src="logoUrl"
        alt="Business Card Logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessCard",
  props: {
    fields: Object,
    logoUrl: String,
  },
};
</script>

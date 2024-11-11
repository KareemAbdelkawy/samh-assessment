<template>
  <template>
    <div
      class="w-full h-full flex flex-col justify-center items-center px-16 bg-white"
    >
      <div
        class="bg-center bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <div class="w-full h-full">
          <h1
            class="mx-auto pt-[14%] z-10 font-bold text-[3.5rem]/[5.25rem] max-w-[60%] text-center bg-clip-text text-transparent"
            style="
              background-image: linear-gradient(
                93.37deg,
                #183867 28.05%,
                #eaa121 44.33%
              );
            "
          >
            Discover Our Paradise Worlds, Travel Anywhere Now!
          </h1>
          <div
            class="mt-14 bg-white border border-[#06162D40] rounded-tl-[1rem] rounded-br-[1rem] flex flex-col"
          >
            <div class="flex justify-center items-center gap-10 py-10">
              <span
                v-for="(item, index) in availableOptions"
                :key="index"
                class="flex text-nowrap items-center gap-5 text-[1.2rem]/[1.25rem] font-semibold cursor-pointer"
                @click="selectedOptionKey = item.key"
                ><img
                  :src="
                    selectedOptionKey === item.key ? clickedImg : nonClickedImg
                  "
                  alt="globe img"
                  class="w-[2rem] h-[2rem] z-0 bg-white"
                />
                {{ item.text }}</span
              >
            </div>
            <div
              class="flex flex-col md:flex-row p-10 border-t border-[#EAA121]"
            >
              <div
                class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5"
              >
                <div class="col-span-1 flex flex-col items-start gap-4">
                  <span
                    class="flex items-center justify-center gap-3 text-[#333333] text-[1rem]/[1.25=rem] font-bold"
                    ><img
                      src="../assets/imgs/icons/from-icon.png"
                      alt="globe img"
                      class="w-[1.625rem] h-auto"
                    />
                    From</span
                  >
                  <input
                    v-model="fromText"
                    type="text"
                    placeholder="Flight from?"
                    class="text-xl placeholder:text-[#7C8DB0] placeholder:h-[1.875rem] h-[2.375rem]"
                  />
                </div>
                <div class="col-span-1 flex flex-col items-start gap-4">
                  <span
                    class="flex items-center justify-center gap-3 text-[#333333] text-[1rem]/[1.25=rem] font-bold"
                    ><img
                      src="../assets/imgs/icons/to-icon.png"
                      alt="globe img"
                      class="w-[1.625rem] h-auto"
                    />
                    To</span
                  >
                  <input
                    v-model="toText"
                    type="text"
                    placeholder="Where to?"
                    class="text-xl placeholder:text-[#7C8DB0] placeholder:h-[1.875rem] h-[2.375rem]"
                  />
                </div>
                <div class="col-span-1 flex flex-col items-start gap-4">
                  <span
                    class="flex items-center justify-center gap-3 text-[#333333] text-[1rem]/[1.25=rem] font-bold"
                    ><img
                      src="../assets/imgs/icons/calender-icon.png"
                      alt="globe img"
                      class="w-[1.625rem] h-auto"
                    />
                    Depart</span
                  >
                  <input
                    v-model="departDate"
                    type="date"
                    class="text-xl placeholder:text-[#7C8DB0] placeholder:h-[1.875rem] h-[2.375rem] rounded-lg py-2"
                  />
                </div>
                <div class="col-span-1 flex flex-col items-start gap-4">
                  <span
                    class="flex items-center justify-center gap-3 text-[#333333] text-[1rem]/[1.25=rem] font-bold"
                    ><img
                      src="../assets/imgs/icons/calender-icon.png"
                      alt="globe img"
                      class="w-[1.625rem] h-auto"
                    />
                    Return</span
                  >
                  <input
                    v-model="returnDate"
                    type="date"
                    class="text-xl placeholder:text-[#7C8DB0] placeholder:h-[1.875rem] h-[2.375rem] rounded-lg py-2"
                  />
                </div>
                <div class="col-span-1 flex flex-col items-start gap-2">
                  <span
                    class="flex items-center justify-center gap-3 text-[#333333] text-[1rem]/[1.25=rem] font-bold"
                    ><img
                      src="../assets/imgs/icons/cabin-icon.png"
                      alt="globe img"
                      class="w-[1.625rem] h-auto"
                    />
                    Cabin Class & Travelers</span
                  >
                  <div class="relative inline-block w-64">
                    <div
                      @click="toggleDropdown"
                      class="rounded-lg p-3 flex justify-between items-center cursor-pointer"
                    >
                      <span class="text-xl text-[#7C8DB0]">{{
                        selectedOption
                      }}</span>
                      <span class="pt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      v-if="dropdownOpen"
                      class="absolute mt-2 w-full rounded-lg shadow-lg bg-white"
                    >
                      <div
                        v-for="(option, index) in options"
                        :key="index"
                        @click="selectOption(option)"
                        class="flex items-center py-3 px-2 hover:bg-gray-100 cursor-pointer"
                        :class="
                          index < options.length - 1
                            ? 'border-b border-[#88909917]'
                            : ''
                        "
                      >
                        <img
                          src="../assets/imgs/icons/family-icon.png"
                          alt="icon"
                          class="h-6 w-6 mr-2"
                        />
                        <span class="text-xl text-[#7C8DB0]">{{ option }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="../assets/imgs/icons/button.png"
                alt="icon"
                class="cursor-pointer w-[4rem] h-[3rem] my-auto mx-auto"
              />
            </div>
          </div>

          <div class="flex flex-col gap-10 py-14">
            <div class="flex flex-col">
              <h1 class="text-[#183867] font-bold text-[2.25rem]/[3.125rem]">
                Popular Destinations
              </h1>
              <span class="text-[#183867] text-[1rem]/[1.4063rem]"
                >Vacations to make your experience enjoyable in Indonesia!</span
              >
            </div>
            <div class="flex gap-5">
              <div
                v-for="(item, index) in 4"
                :key="index"
                class="flex flex-col p-3 bg-[#F0F0F073] rounded-[1rem] border border-white hover:bg-[#EAA12112] hover:border-[#F0A41F] cursor-pointer"
              >
                <img
                  src="../assets/imgs/moduleImgs/rectangle-example.png"
                  alt="icon"
                  class="h-full w-[20.5rem] object-cover"
                />
                <span
                  class="ml-3 text-[0.625rem]/[0.875rem] flex flex-row gap-1 text-[#8F8F8F]"
                  ><img
                    src="../assets/imgs/icons/location-icon.png"
                    alt="icon"
                    class="h-auto w-auto"
                  />Manggarai Barat</span
                >
                <span
                  class="ml-4 pt-1 font-bold text-[1rem]/[1.375rem] text-[#183867]"
                  >Flores Road Trip 3D2N</span
                >
                <span class="ml-4 pt-1 text-[#636363] text-[0.875rem]/[1.25rem]"
                  >3 Days</span
                >
                <span class="ml-4 pt-5 text-[#F0A41F] text-[0.875rem]/[1.25rem]"
                  >$375</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import nonClickedImg from '../assets/imgs/icons/White-circle.png';
import clickedImg from '../assets/imgs/icons/Yellow-circle.png';
import backgroundImage from '../assets/imgs/moduleImgs/globe-img.png';

export default {
  name: 'HomePageMainComponent',

  data() {
    return {
      backgroundImage,
      nonClickedImg,
      clickedImg,
      availableOptions: [
        { text: 'One way', key: 'onWay' },
        { text: 'Round Trip', key: 'roundTrip' },
      ],
      selectedOptionKey: 'onWay',
      fromText: '',
      toText: '',
      departDate: '',
      returnDate: '',
      dropdownOpen: false,
      selectedOption: '1 adult, Economy',
      options: ['1 adult, Economy', '2 adult, Class', '2 adult, Economy'],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.dropdownOpen = false;
    },
  },
};
</script>

<style scoped>
/* placeholder text style */
input[type='date']::-webkit-datetime-edit-text,
input[type='date']::-webkit-datetime-edit-month-field,
input[type='date']::-webkit-datetime-edit-day-field,
input[type='date']::-webkit-datetime-edit-year-field {
  color: #7c8db0;
}

/* regular text style */
input[type='date'].date-input--has-value::-webkit-datetime-edit-text,
input[type='date'].date-input--has-value::-webkit-datetime-edit-month-field,
input[type='date'].date-input--has-value::-webkit-datetime-edit-day-field,
input[type='date'].date-input--has-value::-webkit-datetime-edit-year-field {
  color: black;
}
</style>

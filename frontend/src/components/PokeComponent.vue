<template>
  <div class='font-sans bg-cover w-100% h-100%'>
    <div class="">
      <h1 class="font-black text-3xl text-center py-5 bg-blue-500 text-white">ポケモン剣盾 ステータス検索・比較</h1>
    </div>
    <div class="flex flex-wrap md:flex-nowrap px-10 py-5">
      <div class="flex1" @click="oModal=false">
        <div class="px-4 py-2 m-5 shadow appearance-none border rounded-lg bg-white">
          <div class="text-xl font-bold">自分のポケモン</div>
          <table class="">
            <div class="py-3">
              <th class="font-bold">ポケモン:</th>
              <td style="min-width:250px">
                <v-select
                  class="font-medium shadow relative min-w-full"
                  :filter="fuseSearch"
                  :options="datas"
                  :get-option-label="(option) => option.name + '   ' + option.form"
                  :placeholder="placeholder"
                  v-model="mPokemon"
                  @change="onInput_m(mPokemon, $event)"
                >
                </v-select>
              </td>
            </div>
            <table class="mb-2">
              <tr class="flex flex-wrap">
                <div>
                <th class="font-bold">タイプ1:</th>
                <td class="px-2">
                <input class="font-medium pointer-events-none" v-model="mType1" type="text" placeholder="?" readonly>
                </td>
                </div>
                <div>
                <th class="font-bold">タイプ2:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-model="mType2"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
              </tr>
            </table>

              <table class="mb-3">
              <tr class="flex flex-wrap">
                <div>
                <th class="">特性1:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-model="mAbility1"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
                <div>
                <th class="">特性2:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-bind:value="mAbility2"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
                <div>
                <th class="">隠れ特性:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-bind:value="mAbility3"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
              </tr>
            </table>

            <table class="shadow appearance-none border">
              <tr class="border-b w-4/5">
              <th class="border-b">種族値</th>
              <td></td>
              </tr>
                <tr class="border">
                  <th class="text-center border">HP</th>
                  <td>
                    <a-progress :percent="mH * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td class="">
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mH"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>

                </tr>
                <tr class="border">
                  <th class="text-center border">こうげき</th>
                  <td>
                    <a-progress :percent="mA * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td class="">
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mA"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">ぼうぎょ</th>
                  <td>
                    <a-progress :percent="mB * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mB"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">とくこう</th>
                  <td>
                    <a-progress :percent="mC * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mC"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">とくぼう</th>
                  <td>
                    <a-progress :percent="mD * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mD"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">すばやさ</th>
                  <td>
                    <a-progress :percent="mS * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mS"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border rounded-lg">
                  <th class="text-center border rounded-lg">合計</th>
                  <!-- <td>
                    <a-progress :percent="mAverage * 1/255 * 100" :show-info="false" status="active"/>
                  </td> -->
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="mTotal"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
            </table>
          </table>
        </div>
      </div>
      <div class="flex1" @click="mModal=false">
        <div class="px-4 py-2 m-5 shadow appearance-none border rounded-lg">
          <div class="text-xl font-bold">相手のポケモン</div>
          <table class="">
            <div class="py-3">
              <th class="">ポケモン:</th>
              <td style="min-width:250px">
                <v-select
                  class="font-medium shadow relative min-w-full"
                  :filter="fuseSearch"
                  :options="datas"
                  :get-option-label="(option) => option.name + '   ' + option.form"
                  :placeholder="placeholder"
                  v-model="oPokemon"
                  @change="onInput_o(oPokemon, $event)"
                >
                </v-select>
              </td>
            </div>
            <table class="mb-2">
              <tr class="flex flex-wrap">
                <div>
                <th class="font-bold">タイプ1:</th>
                <td class="px-2">
                <input class="font-medium pointer-events-none" v-model="oType1" type="text" placeholder="?" readonly>
                </td>
                </div>
                <div>
                <th class="font-bold">タイプ2:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-model="oType2"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
              </tr>
            </table>

              <table class="mb-3">
              <tr class="flex flex-wrap">
                <div>
                <th class="">特性1:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-model="oAbility1"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
                <div>
                <th class="">特性2:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-bind:value="oAbility2"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
                <div>
                <th class="">隠れ特性:</th>
                <td class="px-2">
                  <input
                    class="font-medium pointer-events-none"
                    v-bind:value="oAbility3"
                    type="text"
                    placeholder="?"
                    readonly
                  />
                </td>
                </div>
              </tr>
            </table>

            <table class="border">
              <tr class="border-b">
              <th class="border-b">種族値</th>
              </tr>
                <tr class="border">
                  <th class="text-center border">HP</th>
                  <td>
                    <a-progress :percent="oH * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td class="">
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oH"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>

                </tr>
                <tr class="border">
                  <th class="text-center border">こうげき</th>
                  <td>
                    <a-progress :percent="oA * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oA"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">ぼうぎょ</th>
                  <td>
                    <a-progress :percent="oB * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oB"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">とくこう</th>
                  <td>
                    <a-progress :percent="oC * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oC"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">とくぼう</th>
                  <td>
                    <a-progress :percent="oD * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oD"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">すばやさ</th>
                  <td>
                    <a-progress :percent="oS * 1/255 * 100" :show-info="false" status="active"/>
                  </td>
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oS"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="border">
                  <th class="text-center border">合計</th>
                  <!-- <td>
                    <a-progress :percent="oTotal * 1/1125 * 100" :show-info="false" />
                  </td> -->
                  <td>
                    <input
                      class="font-medium text-right w-1/5 pointer-events-none"
                      v-bind:value="oTotal"
                      type="text"
                      placeholder="?"
                      readonly
                    />
                  </td>
                </tr>
            </table>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Methods from '../../api/methods'
import Fuse from 'fuse.js'

export default ({
  props: {
    placeholder: {
      type: String,
      default: "ポケモン名を入力"
    },
  },

    data () {
      return {
        datas: [],
        none: ' ',
        mPokemon: [],
        mModal: false,
        mType1: '',
        mType2: '',
        mAbility1: '',
        mAbility2: '',
        mAbility3: '',
        mH: '',
        mA: '',
        mB: '',
        mC: '',
        mD: '',
        mS: '',
        mTotal: '',
        mAverage: '',
        oPokemon: [],
        oModal: false,
        oName: '',
        oForm: '',
        oType1: '',
        oType2: '',
        oAbility1: '',
        oAbility2: '',
        oAbility3: '',
        oH: '',
        oA: '',
        oB: '',
        oC: '',
        oD: '',
        oS: '',
        oTotal: '',
      }
    },

  async created () {
    await Methods.getPokesData().then(response => {
      this.datas = response.data
    })
  },


  methods: {
    fuseSearch(options, search) {
      const fuse = new Fuse(options, {
        keys: ['name', 'form'],
        includeMatches: true,
      })
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list
    },

    onInput_m: function() {
      if (!this.mPokemon.types[0]) {
        this.mType1 = this.none
      } else {
        this.mType1 = this.mPokemon.types[0]
      }
      if (!this.mPokemon.types[1]) {
        this.mType2 = this.none
      } else {
        this.mType2 = this.mPokemon.types[1]
      }
      if (!this.mPokemon.abilities[0]) {
        this.mAbility1 = this.none
      } else {
        this.mAbility1 = this.mPokemon.abilities[0]
      }
      if (!this.mPokemon.abilities[1]) {
        this.mAbility2 = this.none
      } else {
        this.mAbility2 = this.mPokemon.abilities[1]
      }
      if (!this.mPokemon.hidden_abilities[0]) {
        this.mAbility3 = this.none
      } else {
        this.mAbility3 = this.mPokemon.hidden_abilities[0]
      }
      this.mH = this.mPokemon.status.h
      this.mA = this.mPokemon.status.a
      this.mB = this.mPokemon.status.b
      this.mC = this.mPokemon.status.c
      this.mD = this.mPokemon.status.d
      this.mS = this.mPokemon.status.s
      this.mTotal =
        this.mPokemon.status.h +
        this.mPokemon.status.a +
        this.mPokemon.status.b +
        this.mPokemon.status.c +
        this.mPokemon.status.d +
        this.mPokemon.status.s
      this.mAverage = this.mTotal / 6
      console.log(this.mPokemon)
    },

    onInput_o: function() {
      if (!this.oPokemon.types[0]) {
        this.oType1 = this.none
      } else {
        this.oType1 = this.oPokemon.types[0]
      }
      if (!this.oPokemon.types[1]) {
        this.oType2 = this.none
      } else {
        this.oType2 = this.oPokemon.types[1]
      }
      if (!this.oPokemon.abilities[0]) {
        this.oAbility1 = this.none
      } else {
        this.oAbility1 = this.oPokemon.abilities[0]
      }
      if (!this.oPokemon.abilities[1]) {
        this.oAbility2 = this.none
      } else {
        this.oAbility2 = this.oPokemon.abilities[1]
      }
      if (!this.oPokemon.hidden_abilities[0]) {
        this.oAbility3 = this.none
      } else {
        this.oAbility3 = this.oPokemon.hidden_abilities[0]
      }
      this.oH = this.oPokemon.status.h
      this.oA = this.oPokemon.status.a
      this.oB = this.oPokemon.status.b
      this.oC = this.oPokemon.status.c
      this.oD = this.oPokemon.status.d
      this.oS = this.oPokemon.status.s
      this.oTotal =
        this.oPokemon.status.h +
        this.oPokemon.status.a +
        this.oPokemon.status.b +
        this.oPokemon.status.c +
        this.oPokemon.status.d +
        this.oPokemon.status.s
      console.log(this.oPokemon)
    },
  },


  watch: {
    mPokemon () {
      this.onInput_m()
    },
    oPokemon () {
      this.onInput_o()
    }
  }

})
</script>

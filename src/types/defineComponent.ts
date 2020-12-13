import Vue from "vue";
import { ThisTypedComponentOptionsWithRecordProps } from "vue/types/options";

export default function defineComponent<Data, Methods, Computed, Props, V extends Vue = Vue>(options?: ThisTypedComponentOptionsWithRecordProps<V, Data, Methods, Computed, Props>) {
  return Vue.extend(options as any);
}

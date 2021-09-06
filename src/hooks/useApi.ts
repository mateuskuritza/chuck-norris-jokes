import chuckApi from "../services/chuckApi";

export default function useApi() {
  return {
    chuck: new chuckApi()
  };
}
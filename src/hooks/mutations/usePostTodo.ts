import { useMutation } from "@tanstack/react-query";
import { postTodo } from "../../api/apis";

export default function usePostTodo() {
  return useMutation(postTodo);
}

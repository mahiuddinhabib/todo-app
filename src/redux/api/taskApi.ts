import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const TASK_URL = "/tasks";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create task endpoint
    addTask: build.mutation({
      query: (data) => ({
        url: `${TASK_URL}/create-task`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.task],
    }),

    // get all task endpoint
    getAllTasks: build.query({
      query: () => {
        return {
          url: TASK_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.task],
    }),

    // get single task endpoint
    getSingleTask: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${TASK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.task],
    }),

    // update existing task endpoint
    updateTask: build.mutation({
      query: (data) => ({
        url: `${TASK_URL}/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.task],
    }),

    // delete existing task endpoint
    deleteTask: build.mutation({
      query: (id) => ({
        url: `${TASK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.task],
    }),
  }),
});

export const {
    useAddTaskMutation, // create hook
    useGetAllTasksQuery, // get all hook
    useGetSingleTaskQuery, // get single hook
    useUpdateTaskMutation, // update hook
    useDeleteTaskMutation, // delete hook
} = taskApi;
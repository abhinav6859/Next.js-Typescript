"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "./components/Button";
import { title } from "process";

type Task = {
  _id: string;
  title: string;
  description: string;
};

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  const [editId, setEditId] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/todo");
      setTasks(response.data.todos);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (_id: string) => {
    try {
  const response =  await axios.delete("/api/todo", { data: { _id } });
      setTasks((prev) => prev.filter((task) => task._id !== _id));
        //  toast.success("Task Deleted Successfully 🗑️",{
           toast.success(response.data.message,{
          autoClose: 1000,
         });
  
    } catch (error) {
      toast.error("Failed to delete task");
    }
    fetchTasks();
  };

  const handleedit = (task: Task) => {
    setFormData({
      title: task.title,
      description: task.description,
    });
    setEditId(task._id);
  };

  const changehandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/todo", formData);
      toast.success(response.data.message);

      setFormData({
        title: "",
        description: "",
      });
      await fetchTasks();
    } catch (error) {
      toast.error("Failed to add task");
    }

    if (!formData.title || !formData.description) {
      toast.error("Please fill all fields");

      if (editId) {
        setTasks((prev) =>
          prev.map((task) =>
            task._id === editId
              ? {
                  ...task,
                  title: formData.title,
                  description: formData.description,
                }
              : task,
          ),
        );

        setEditId(null);
        setFormData({ title: "", description: "" });
        return;
      } else {
        toast.error("Please fill all fields");
        return;
      }
    }

    const newTask: Task = {
      _id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
    };

    setTasks((prev) => [...prev, newTask]);

    setFormData({ title: "", description: "" });

    fetchTasks();
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <h1 className="text-4xl text-center mt-6">ToDo App</h1>

      <form
        onSubmit={submitform}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >
        <input
          value={formData.title}
          onChange={changehandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />

        <textarea
          value={formData.description}
          onChange={changehandler}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        />

        <button
          type="submit"
          className="bg-gray-600 py-3 px-11 text-white cursor-pointer"
        >
          Add Task
        </button>
      </form>

      {/* 🔹 Table */}
      <div className="relative overflow-x-auto mt-24 w-[80%] mx-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id} className="border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{task.title}</td>
                <td className="px-6 py-4">{task.description}</td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {editId === task._id ? (
                      <Button
                        onClick={() => {
                          setTasks((prev) =>
                            prev.map((t) =>
                              t._id === task._id
                                ? {
                                    ...t,
                                    title: formData.title,
                                    description: formData.description,
                                  }
                                : t,
                            ),
                          );
                          setEditId(null);
                          setFormData({ title: "", description: "" });
                          toast.success("Task Updated Successfully ✏️");
                        }}
                        text="Save"
                      />
                    ) : (
                      <Button onClick={() => handleedit(task)} text="Edit" />
                    )}

                    <Button
                      onClick={() => deleteTask(task._id)}
                      text="Delete"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

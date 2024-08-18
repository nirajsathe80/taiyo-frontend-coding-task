import React, { useState } from "react";
import { FormValue, IContact } from "../../types";
import Button from "../button";

interface CreateFormProps {
  handleSubmit: (formValue: FormValue) => void;
  defaultValues?: IContact;
  isEditForm: boolean;
  type: "view" | "create" | "edit";
}

const ContactForm = ({
  handleSubmit,
  defaultValues,
  isEditForm = false,
  type,
}: CreateFormProps) => {
  const [formValues, setFormValues] = useState({
    firstName: defaultValues?.firstName ?? "",
    lastName: defaultValues?.lastName ?? "",
    isActive: defaultValues?.isActive ?? "true",
  });

  const { firstName, lastName, isActive } = formValues;
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      className="max-w-sm mx-auto mt-10 p-4"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          FirstName
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Please enter your firstname"
          required
          value={firstName}
          onChange={handleChange}
          readOnly={type === "view"}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          LastName
        </label>
        <input
          type="text"
          id="lastName"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          name="lastName"
          value={lastName}
          onChange={handleChange}
          readOnly={type === "view"}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="isActive"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          IsActive
        </label>
        <select
          name="isActive"
          id="isActive"
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={isActive}
          required
          disabled={type === "view"}
        >
          <option value={"true"}>True</option>
          <option value={"false"}>False</option>
        </select>
      </div>
      {type === "view" ? (
        <></>
      ) : (
        <Button
          buttonText={isEditForm ? "Update Contact" : "Create Contact"}
          type="submit"
        />
      )}
    </form>
  );
};

export default ContactForm;

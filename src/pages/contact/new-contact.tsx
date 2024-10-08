import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import Layout from "../../layout";
import { updateContactList } from "../../store/contactSlice";
import { RootState } from "../../store/store";
import { FormValue } from "../../types";

const NewContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactList = useSelector(
    (state: RootState) => state.contact.contactList
  );

  const handleSubmit = (formData: FormValue) => {
    const formWithId = { ...formData, id: _.size(contactList) + 1 };
    dispatch(updateContactList(formWithId));
    alert("New contact created successfully");
    navigate("/contact");
  };

  return (
    <Layout>
      <>
        <div className="text-center  md:text-2xl text-base  font-semibold bg-[rgba(0,0,0,0.8)] text-[rgba(255,255,255,0.88)] p-4">
          Create contact
        </div>
        <ContactForm
          handleSubmit={handleSubmit}
          isEditForm={false}
          type="create"
        />
      </>
    </Layout>
  );
};

export default NewContact;

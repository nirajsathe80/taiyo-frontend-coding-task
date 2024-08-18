import _ from "lodash";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import Layout from "../../layout";
import { updateExistingContact } from "../../store/contactSlice";
import { RootState } from "../../store/store";
import { FormValue } from "../../types";

const EditContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValue: FormValue) => {
    const formWithId = { ...formValue, id };
    dispatch(updateExistingContact(formWithId));
    alert("Form updated successfully");
    navigate("/contact");
  };

  const contactList = useSelector(
    (state: RootState) => state.contact.contactList
  );

  const singleContact = useMemo(() => {
    return _.find(
      contactList,
      (contact) => _.parseInt(contact.id) === _.parseInt(id as string)
    );
  }, [id]);

  return (
    <Layout>
      <>
        <div className="text-center text-2xl p-3 font-semibold bg-[rgba(0,0,0,0.8)] text-[rgba(255,255,255,0.88)]">
          Edit Contact
        </div>
        <ContactForm
          handleSubmit={handleSubmit}
          defaultValues={singleContact}
          isEditForm={true}
          type="edit"
        />
      </>
    </Layout>
  );
};

export default EditContact;

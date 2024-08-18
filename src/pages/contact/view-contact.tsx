import _ from "lodash";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import Sidebar from "../../components/sidebar";
import Layout from "../../layout";
import { RootState } from "../../store/store";

const ViewContact = () => {
  const { id } = useParams();

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
          View Contact
        </div>
        <ContactForm
          handleSubmit={() => {}}
          defaultValues={singleContact}
          isEditForm={true}
          type="view"
        />
      </>
    </Layout>
  );
};

export default ViewContact;

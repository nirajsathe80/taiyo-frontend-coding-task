import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { handleDeleteContact } from "../../store/contactSlice";
import Card from "../../components/card";
import { RootState } from "../../store/store";
import Layout from "../../layout";

function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactList = useSelector(
    (state: RootState) => state.contact.contactList
  );

  const handleCreateContactButtonClick = () => {
    navigate("/contact/new");
  };

  const handleEditButtonClick = (id: string) => {
    navigate(`/contact/${id}/edit`);
  };

  const handleViewButtonClick = (id: string) => {
    navigate(`/contact/${id}`);
  };

  return (
    <Layout>
      <div className="text-center text-2xl p-3 font-semibold bg-[rgba(0,0,0,0.8)] text-[rgba(255,255,255,0.88)]">
        Contact Page
      </div>
      <div className="flex justify-center my-8">
        <Button
          buttonText="Create Contact"
          onClick={handleCreateContactButtonClick}
        />
      </div>
      <div className="mx-4 mb-20">
        {_.size(contactList) > 0 ? (
          <div className="grid place-items-center md:place-items-start  md:grid-cols-2 xl:grid-cols-3  grid-cols-1 gap-3">
            {_.map(contactList, (contact) => {
              return (
                <Card
                  list={contact}
                  onDeleteClick={(id) => dispatch(handleDeleteContact(id))}
                  onEditClick={handleEditButtonClick}
                  onViewClick={handleViewButtonClick}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center mt-10 font-medium text-xl">
            Please add details in contact list by clicking on above button
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Contact;

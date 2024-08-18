import { IContact } from "../../types";

interface CardProps {
  cardDetails: IContact;
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
  onViewClick: (id: string) => void;
}

const Card = ({
  cardDetails,
  onDeleteClick,
  onEditClick,
  onViewClick,
}: CardProps) => {
  const { firstName, lastName, id, isActive } = cardDetails;
  const status = isActive === "true" ? "active" : "inActive";
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {firstName} {lastName}
        </h5>
        <span className="text-sm text-gray-500 capitalize ">
          Status: {status}
        </span>
        <div className="flex flex-wrap mt-4 lg:gap-0gap-2 md:mt-6">
          <button
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={() => onViewClick(id)}
          >
            View Details
          </button>
          <button
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={() => onEditClick(id)}
          >
            Edit
          </button>
          <button
            className="py-2 px-4 ms-2 text-sm font-medium text-black focus:outline-none bg-red-600 rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

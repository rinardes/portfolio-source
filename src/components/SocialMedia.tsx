import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div>
      <h2 className="mb-6 font-bold tracking-wider"></h2>
      <div className="flex gap-4">
        <a
          href=""
          className="bg-[#202327] px-6 py-4 text-lg transition-all hover:-translate-y-2 "
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

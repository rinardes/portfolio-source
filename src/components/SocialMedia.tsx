import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { twMerge } from "tailwind-merge";

const classname =
  "border border-borderOnbackground bg-onBackground px-4 py-2 text-3xl text-primary-400 transition-all hover:-translate-y-2";

function SocialMedia({ isVertical }: { isVertical?: boolean }) {
  return (
    <div>
      <div
        className={`flex justify-center ${isVertical && "md:flex-col"} gap-4`}
      >
        <a
          href="https://www.linkedin.com/in/richardnardes/"
          target="_blank"
          className={classname}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/rinardes"
          target="_blank"
          className={classname}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className={twMerge(classname, "text-2xl")} href="cv.pdf" download>
          CV
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;

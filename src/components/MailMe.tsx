import { useState } from "react";
import MailMeField from "./MailMeField";
import MailSendConfirmation from "./MailSendConfirmation";

function MailMe() {
  const [isSubmited, setisSubmited] = useState(false);

  const [toastTrigger, setToastTrigger] = useState(false);
  const [status, setStatus] = useState(0);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form: HTMLFormElement = e.currentTarget;
    let data: FormData = new FormData(form);
    fetch(`https://formsubmit.co/${import.meta.env.VITE_RESEND_CREDENTIAL}`, {
      method: "POST",
      body: data,
    }).then((r) => {
      setStatus(r.status);
      setToastTrigger(true);
      setTimeout(() => {
        setisSubmited(false);
      }, 1000);
    });
    setisSubmited(true);
  };

  return (
    <div>
      {toastTrigger && (
        <MailSendConfirmation
          triggeFunction={setToastTrigger}
          status={status}
        />
      )}
      <form
        method="POST"
        onSubmit={sendMail}
        className="flex w-full flex-col gap-5"
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <div className="flex w-full flex-col gap-x-5  gap-y-5 sm:flex-row   [&>*]:basis-1/2">
          <MailMeField
            isSubmited={isSubmited}
            isRequired
            name={"name"}
            label={"Nome"}
          />
          <MailMeField
            isSubmited={isSubmited}
            isRequired
            name={"email"}
            label={"Email"}
          />
        </div>
        <MailMeField
          isSubmited={isSubmited}
          isRequired
          name={"subject"}
          label={"Assunto"}
        />

        <MailMeField
          isSubmited={isSubmited}
          isRequired
          name={"message"}
          label={"Mensagem"}
          isMessage
        />
        <button className="transiton-[transform] rounded-sm bg-primary-400 px-9 py-4 font-primary text-sm text-primary-800 duration-300 hover:-translate-y-1">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default MailMe;

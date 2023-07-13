import { useState } from "react";
import MailMeField from "./MailMeField";

function MailMe() {
  const [isSubmited, setisSubmited] = useState(false);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form: HTMLFormElement = e.currentTarget;
    let data: FormData = new FormData(form);
    fetch("https://formsubmit.co/e47984ed731ec19a00c851911add9359", {
      method: "POST",
      body: data,
    }).then(() => {
      setTimeout(() => {
        setisSubmited(false);
      }, 1000);
    });
    setisSubmited(true);
  };

  return (
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
          name={"phone"}
          label={"Telefone"}
        />
      </div>
      <MailMeField
        isSubmited={isSubmited}
        isRequired
        name={"email"}
        label={"Email"}
      />
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
  );
}

export default MailMe;

import { Dispatch, useEffect } from "react";

function MailSendConfirmation({
  triggeFunction,
  status,
}: {
  triggeFunction: Dispatch<boolean>;
  status: number;
}) {
  useEffect(() => {
    setInterval(triggeFunction, 5000, false);
    status;
  }, []);

  return (
    <div className="fixed bottom-6 right-6 rounded-md border border-primary-400 bg-black px-4 py-4 text-sm">
      <p className="font-bold">Confirmação de envio</p>
      <p>Email enviado com sucesso!</p>
    </div>
  );
}

export default MailSendConfirmation;

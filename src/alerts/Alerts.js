import Swal from "sweetalert2";

export const AlertMessageHelp = (message, icon) =>
  Swal.fire({
    icon: icon,
    title: message,
  });

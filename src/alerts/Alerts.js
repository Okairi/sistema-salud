import Swal from "sweetalert2";

export const succesAlert = (message) =>
  Swal.fire({
    title: message,
    icon: "success",
  });

export const errorAlert = (err) =>
  Swal.fire({
    icon: "error",
    title: err,
  });

export const ChangePasswordPayload = (formData: {
  password: any;
  oldPassword: any;
}) => {
  return {
    newPassword: formData.password,
    oldPassword: formData.oldPassword,
  };
};

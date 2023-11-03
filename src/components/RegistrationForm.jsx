import { useState } from "react";
import swal from "sweetalert";
import axios from "../api/axios.js";
import { Validation } from "../validation/validate.js";

const RegistrationForm = () => {
  const [profile, setProfile] = useState();
  const forminitialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    batch: "",
    isactive: false,
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
  };
  const validateImageFile = (file) => {
    if (!file) {
      return "Please select an image.";
    }
    return null;
  };
  const [memberdata, setMemberdata] = useState({ ...forminitialvalues });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberdata({ ...memberdata, [name]: value });
  };
  const profileHandler = (e) => {
    const file = e.target.files[0];
    setProfile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = Validation(memberdata);
    const validimage = validateImageFile(profile);
    if (result.length !== 0) {
      swal("error", result[0], "error");
    } else if (validimage !== null) {
      swal("error", validimage, "error");
    } else {
      let form = new FormData();
      for (let values in memberdata) {
        form.append(values, memberdata[values]);
      }
      form.append("image", profile);

      swal("Sit Back !", "Your Response is Being Submitted", {
        button: false,
        closeOnClickOutside: false,
      });
      try {
        const res = await axios.post("member/add", form);
        if (res?.data.message === "Your data has been added") {
          swal(
            "Success",
            "Your response is submitted successfully...",
            "success"
          );
          setMemberdata(forminitialvalues);
          document.querySelector("#registration-form-d").reset();
        } else {
          swal("Error", res.data.message, "error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="regis-form">
      <h1>Member's Registration</h1>
      <form id="registration-form-d">
        <div className="inputs">
          <div className="input">
            <input
              value={memberdata.firstname}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="firstname"
              id="f_name"
            />
            <label className="label" htmlFor="f_name">
              First Name<span>*</span>
            </label>
          </div>

          <div className="input">
            <input
              value={memberdata.lastname}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="lastname"
              id="l_name"
            />
            <label htmlFor="l_name">
              Last Name<span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              accept=".jpg,.jpeg,.png"
              placeholder=" "
              type="file"
              name="file"
              id="file"
              onChange={profileHandler}
            />
            <i className="fas fa-camera"></i>
          </div>
          <div className="input">
            <input
              value={memberdata.email}
              placeholder=" "
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="email">
              Email<span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              value={memberdata.mobile}
              placeholder=" "
              onChange={handleChange}
              type="phone"
              name="mobile"
              id="mobile"
            />
            <label htmlFor="mobile">
              Mobile Number<span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              value={memberdata.batch}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="batch"
              id="batch"
            />
            <label className="label" htmlFor="batch">
              Admission Year <span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              value={memberdata.linkedin}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="linkedin"
              id="linked"
            />
            <label htmlFor="linked">
              LinkedIn Profile <span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              value={memberdata.github}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="github"
              id="gh"
            />
            <label htmlFor="gh">
              GitHub Profile<span>*</span>
            </label>
          </div>
          <div className="input">
            <input
              value={memberdata.youtube}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="youtube"
              id="yt"
            />
            <label htmlFor="yt">YouTube Channel</label>
          </div>
          <div className="input">
            <input
              value={memberdata.facebook}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="facebook"
              id="fb"
            />
            <label htmlFor="fb">FaceBook Profile</label>
          </div>
          <div className="input">
            <input
              value={memberdata.twitter}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="twitter"
              id="twit"
            />
            <label htmlFor="twit">Twitter Profile</label>
          </div>
          <div className="input">
            <input
              value={memberdata.instagram}
              placeholder=" "
              onChange={handleChange}
              type="text"
              name="instagram"
              id="insta"
            />
            <label htmlFor="insta">Instagram Profile</label>
          </div>
        </div>
        <div className="submit">
          <input onClick={handleSubmit} type="submit" value="Submit" />
          <p>
            (<span>*</span>) are required fields
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

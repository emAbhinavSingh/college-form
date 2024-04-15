import "./App.css";
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      studentName,
      email,
      phoneNo: phoneNumber,
      eno: enrollmentNumber,
      address,
    };

    const isPhoneNumberExists = studentData.some((student) => student.phoneNo === phoneNumber);
    const isEmailExists = studentData.some((student) => student.email === email);
    const isEnrollmentNumberExists = studentData.some((student) => student.eno === enrollmentNumber);

    if (isPhoneNumberExists) {
      alert("Phone number already exists!");
      return
    } else if (isEmailExists) {
      alert("Email already exists!");
      return
    } else if (isEnrollmentNumberExists) {
      alert("Enrollment number already exists!");
      return
    }else if(
      data.phoneNo.length !== 10 
    ) {
      alert("Phone number should be of 10 digits");
      return
    }
    else {
      setStudentData([...studentData, data]);
    }
  };


  return (
    <main className="grid grid-cols-12">
      <div className="flex col-span-4 items-center text-white justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="studentName"
                className="mb-3 block text-base font-medium "
              >
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                id="studentName"
                required
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="student name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium "
              >
                Email Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter mail"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="w-full">
              <div className="mb-5">
                <label
                  htmlFor="phoneNo"
                  className="mb-3 block text-base font-medium "
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNo"
                  required
                  maxLength={10}
                  minLength={10}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phoneNo"
                  placeholder="phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="eno"
                  className="mb-3 block text-base font-medium "
                >
                  Enrollment Number
                </label>
                <input
                  type="eno"
                  maxLength={11}
                  name="eno"
                  id="eno"
                  required
                  placeholder="enrollment number"
                  onChange={(e) => setEnrollmentNumber(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="address"
                className="mb-3 block text-base font-medium "
              >
                Address
              </label>
              <textarea
                name="address"
                rows={3}
                required
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
                cols={10}
                id="address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <button
              type="submit"
              className="hover:bg-blue-600 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col-span-8 bg-gray-800">
        <table className="w-full">
          <thead className="bg-gray-600">
            <tr>
              <th className="py-2 px-4 text-left text-white font-medium">Student Name</th>
              <th className="py-2 px-4 text-left text-white font-medium">Email</th>
              <th className="py-2 px-4 text-left text-white font-medium">Phone Number</th>
              <th className="py-2 px-4 text-left text-white font-medium">Enrollment Number</th>
              <th className="py-2 px-4 text-left text-white font-medium">Address</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2 px-4 text-white">{student.studentName}</td>
                <td className="py-2 px-4 text-white">{student.email}</td>
                <td className="py-2 px-4 text-white">{student.phoneNo}</td>
                <td className="py-2 px-4 text-white">{student.eno}</td>
                <td className="py-2 px-4 text-white">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;

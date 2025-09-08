export default function EmployeeTable() {
   const employees = [
  {
    sno: 1,
    name: "Alice Johnson",
    designation: "Managing Director",
    joiningDate: "15-03-2022",
    status: "Working",
  },
  {
    sno: 2,
    name: "David Smith",
    designation: "Field Worker",
    joiningDate: "02-11-2021",
    status: "On Leave",
  },
  {
    sno: 3,
    name: "Priya Patel",
    designation: "Executive Officer",
    joiningDate: "28-06-2023",
    status: "Working",
  },
  {
    sno: 4,
    name: "Liam Wong",
    designation: "Field Worker",
    joiningDate: "12-01-2020",
    status: "Working",
  },
  {
    sno: 5,
    name: "Sofia Martinez",
    designation: "Managing Director",
    joiningDate: "23-07-2019",
    status: "On Leave",
  },
  {
    sno: 6,
    name: "Mohammed Al-Sayed",
    designation: "Executive Officer",
    joiningDate: "14-02-2024",
    status: "Working",
  },
  {
    sno: 7,
    name: "Emma Thompson",
    designation: "Field Worker",
    joiningDate: "05-09-2022",
    status: "On Leave",
  },
  {
    sno: 8,
    name: "Carlos Rivera",
    designation: "Managing Director",
    joiningDate: "30-01-2023",
    status: "Working",
  },
  {
    sno: 9,
    name: "Akira Tanaka",
    designation: "Executive Officer",
    joiningDate: "10-05-2021",
    status: "Working",
  },
  {
    sno: 10,
    name: "Grace Lee",
    designation: "Field Worker",
    joiningDate: "18-08-2020",
    status: "On Leave",
  },
  {
    sno: 11,
    name: "John Kim",
    designation: "Managing Director",
    joiningDate: "11-01-2022",
    status: "Working",
  },
  {
    sno: 12,
    name: "Nina Gupta",
    designation: "Executive Officer",
    joiningDate: "22-04-2023",
    status: "On Leave",
  },
  {
    sno: 13,
    name: "Brian O'Conner",
    designation: "Field Worker",
    joiningDate: "05-10-2020",
    status: "Working",
  },
  {
    sno: 14,
    name: "Lucia Romano",
    designation: "Managing Director",
    joiningDate: "18-06-2018",
    status: "Working",
  },
  {
    sno: 15,
    name: "Chen Wei",
    designation: "Executive Officer",
    joiningDate: "01-07-2024",
    status: "On Leave",
  },
  {
    sno: 16,
    name: "Robert Miles",
    designation: "Field Worker",
    joiningDate: "14-03-2021",
    status: "Working",
  },
  {
    sno: 17,
    name: "Fatima Noor",
    designation: "Executive Officer",
    joiningDate: "09-12-2022",
    status: "Working",
  },
  {
    sno: 18,
    name: "Andre Dupont",
    designation: "Field Worker",
    joiningDate: "27-09-2019",
    status: "On Leave",
  },
  {
    sno: 19,
    name: "Isabella Moretti",
    designation: "Managing Director",
    joiningDate: "16-08-2023",
    status: "Working",
  },
  {
    sno: 20,
    name: "Ethan Wright",
    designation: "Field Worker",
    joiningDate: "29-07-2021",
    status: "On Leave",
  }
];


    return(
        <>
        <div className="max-h-96 lg:max-h-125 ">
            <table className="w-full ">
                <thead className="text-left bg-white new-theme sticky top-0 z-10 ">
                    <tr className="border-b-1 border-gray-200">
                        <th className=" px-4 py-2 text-xl">S.No</th>
                        <th className=" px-4 py-2 text-xl">Name</th>
                        <th className=" px-4 py-2 text-xl">Designation</th>
                        <th className=" px-4 py-2 text-xl">Joined</th>
                        <th className=" px-4 py-2 text-xl">Status</th>
                    </tr>
                </thead>
                <tbody className=" m-2 z-5 ">
                    {employees.map((item) =>
                        <tr key={item.sno} className="text-left border-b-1 border-gray-200">
                          <td className=" px-4 py-3">{item.sno}</td>
                          <td className=" px-4 py-3">{item.name}</td>
                          <td className=" px-4 py-3">{item.designation}</td>
                          <td className=" px-4 py-3">{item.joiningDate}</td>
                          <td className=" px-4 py-3">{item.status}</td>
                    </tr>)}
                </tbody>
            </table>
            </div>
        </>
    )
}
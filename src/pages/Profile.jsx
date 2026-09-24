
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  CheckCircle2,
  AlertCircle,
  LogOut,
  User,
} from "lucide-react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Debug - check your browser console
  console.log("Profile user:", user);

  // If user is not available
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <User size={30} className="text-gray-500" />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            User information not found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please login again to view your profile.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  /*
   * Normalize user data.
   *
   * Different APIs may return:
   * name / fullName
   * phone / mobile
   * dob / dateOfBirth
   * address / city
   */

  const userName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    "User";

  const userEmail =
    user?.email ||
    user?.emailAddress ||
    "Email not available";

  const userPhone =
    user?.phone ||
    user?.mobile ||
    user?.mobileNumber ||
    "Phone not available";

  const userDob =
    user?.dob ||
    user?.dateOfBirth ||
    "Date of birth not available";

  const userAddress =
    user?.address ||
    user?.city ||
    user?.location ||
    "Address not available";

  const memberSince =
    user?.memberSince ||
    user?.createdAt
      ? new Date(user?.memberSince || user?.createdAt).toLocaleDateString(
          "en-IN",
          {
            month: "long",
            year: "numeric",
          }
        )
      : "Not available";

  const profileCompleted = user?.profileCompleted || 0;

  // Generate initials
  const initials = userName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const loans = [
    {
      id: "LN-10245",
      type: "Personal Loan",
      amount: "₹2,50,000",
      status: "Active",
      date: "12 Sep 2026",
      statusColor: "green",
    },
    {
      id: "LN-09821",
      type: "Business Loan",
      amount: "₹5,00,000",
      status: "Completed",
      date: "18 Mar 2026",
      statusColor: "blue",
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              My Profile
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your personal information and loan details
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <Edit size={18} />
            Edit Profile
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Profile Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

            {/* Avatar */}
            <div className="flex flex-col items-center text-center">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
                {initials}
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                {userName}
              </h2>

              <p className="text-sm text-gray-500">
                Loan Customer
              </p>
            </div>

            {/* Profile Completion */}
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  Profile Completion
                </span>

                <span className="font-semibold text-green-600">
                  {profileCompleted}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-600 transition-all duration-500"
                  style={{
                    width: `${Math.min(profileCompleted, 100)}%`,
                  }}
                />
              </div>
            </div>

            {/* Account Information */}
            <div className="mt-8 space-y-5">

              {/* Email */}
              <div className="flex gap-3">
                <div className="h-fit rounded-lg bg-gray-100 p-2">
                  <Mail size={18} className="text-gray-600" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <p className="break-all text-sm font-medium text-gray-800">
                    {userEmail}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="h-fit rounded-lg bg-gray-100 p-2">
                  <Phone size={18} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {userPhone}
                  </p>
                </div>
              </div>

              {/* DOB */}
              <div className="flex gap-3">
                <div className="h-fit rounded-lg bg-gray-100 p-2">
                  <Calendar size={18} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Date of Birth
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {userDob}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <div className="h-fit rounded-lg bg-gray-100 p-2">
                  <MapPin size={18} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Address
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {userAddress}
                  </p>
                </div>
              </div>

            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-6 lg:col-span-2">

            {/* Personal Information */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Personal Information
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Your registered personal details
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
                >
                  <Edit size={19} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Full Name
                  </label>

                  <p className="mt-1 font-medium text-gray-800">
                    {userName}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Email Address
                  </label>

                  <p className="mt-1 break-all font-medium text-gray-800">
                    {userEmail}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Mobile Number
                  </label>

                  <p className="mt-1 font-medium text-gray-800">
                    {userPhone}
                  </p>
                </div>

                {/* DOB */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Date of Birth
                  </label>

                  <p className="mt-1 font-medium text-gray-800">
                    {userDob}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Address
                  </label>

                  <p className="mt-1 font-medium text-gray-800">
                    {userAddress}
                  </p>
                </div>

                {/* Member Since */}
                <div>
                  <label className="text-xs font-medium text-gray-400">
                    Member Since
                  </label>

                  <p className="mt-1 font-medium text-gray-800">
                    {memberSince}
                  </p>
                </div>

              </div>
            </div>

            {/* Loan History */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900">
                  Loan History
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your recent loan applications
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">

                  <thead>
                    <tr className="border-b border-gray-100 text-sm text-gray-400">
                      <th className="pb-4 font-medium">
                        Loan ID
                      </th>

                      <th className="pb-4 font-medium">
                        Loan Type
                      </th>

                      <th className="pb-4 font-medium">
                        Amount
                      </th>

                      <th className="pb-4 font-medium">
                        Date
                      </th>

                      <th className="pb-4 font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {loans.map((loan) => (
                      <tr
                        key={loan.id}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-4 text-sm font-semibold text-gray-800">
                          {loan.id}
                        </td>

                        <td className="py-4 text-sm text-gray-600">
                          {loan.type}
                        </td>

                        <td className="py-4 text-sm font-semibold text-gray-800">
                          {loan.amount}
                        </td>

                        <td className="py-4 text-sm text-gray-500">
                          {loan.date}
                        </td>

                        <td className="py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                              loan.statusColor === "green"
                                ? "bg-green-50 text-green-700"
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            <CheckCircle2 size={14} />
                            {loan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-5 sm:flex-row sm:items-center">

              <div className="rounded-full bg-yellow-100 p-3">
                <AlertCircle
                  size={22}
                  className="text-yellow-700"
                />
              </div>

              <div>
                <h3 className="font-semibold text-yellow-900">
                  Keep your profile updated
                </h3>

                <p className="mt-1 text-sm text-yellow-800">
                  Complete your profile and upload the required
                  documents to speed up future loan applications.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


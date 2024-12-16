import "../css/LogInForm.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
  SignIn,
  SignOutButton,
} from "@clerk/clerk-react";

function LogInForm() {
  return (
    <div>
      <SignedOut>
        <SignIn signUpUrl="/signup" />
      </SignedOut>
      <SignedIn>
        <UserProfile />
        <SignOutButton style={{ marginTop: 25 }} />
      </SignedIn>
    </div>
  );
}

export default LogInForm;

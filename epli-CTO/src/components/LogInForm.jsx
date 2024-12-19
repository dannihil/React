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
        <div className="box">
          <SignIn signUpUrl="/signup" />
          <div className="login-info">
            <h1 className="login-info-title">Innskráning</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              odio velit, faucibus nec vulputate ut, lacinia sit amet dolor.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nullam felis sem, tincidunt mollis
              convallis a, venenatis ut ante. Quisque sodales, lacus eget
              lobortis aliquam
            </h3>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <UserProfile />
        <SignOutButton style={{ marginTop: 25 }} />
      </SignedIn>
    </div>
  );
}

export default LogInForm;

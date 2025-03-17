import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/bookingc.css";

export default function SubscriptionPlanForm() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleSubscribe = () => {
    if (isLoggedIn) {
      alert(`Subscription successful for ${selectedPlan} plan!`);
      // Add actual subscription logic here
    } else {
      navigate("/login");
    }
  };

  const plans = [
    {
      id: "basic",
      title: "Starter Edit \n(Budget-Friendly)",
      features: [
        "YouTube Thumbnails: Simple, clean design (1-2 images, basic text)",
        "Montages & Edits: Basic cuts, color correction, minimal transitions",
        "Shorts & Reels Editing: Simple cuts, subtitles (auto-generated), and minimal effects",
        "3D Character Work: Basic model (no animations, simple rigging)",
        "💵 Price: ₹XXX",
      ],
    },
    {
      id: "standard",
      title: "Pro Edit \n(Balanced for Most Clients)",
      features: [
        "YouTube Thumbnails: Advanced Photoshop work, blending effects, lighting enhancements",
        "Montages & Edits: Smooth transitions, text animations, better color grading",
        "Shorts & Reels Editing: Fast-paced cuts, engaging text animations, smooth effects",
        "3D Character Work: Detailed model, custom textures, simple animations",
        "💵 Price: ₹XXX",
      ],
    },
    {
      id: "premium",
      title: "Elite Edit \n (High-End, Pro-Level Work)",
      features: [
        "YouTube Thumbnails: Advanced Photoshop, 3D elements, motion effects",
        "Montages & Edits: Cinematic transitions, sound design, high-quality VFX",
        "Shorts & Reels Editing: High-energy edits, custom animations, unique effects",
        "3D Character Work: Fully detailed model, smooth animations, custom rigging",
        "💵 Price: ₹XXX",
      ],
    },
    {
      id: "custom",
      title: "Custom Edit \n (For Bulk & Custom Orders)",
      features: [
        "Custom pricing based on project requirements",
        " Clients can mix and match services",
        " Priority delivery available",
        "💵 Price: Varies based on project scope",
      ],
    },
  ];

  return (
    <div className="subscription-container">
      <main className="subscription-main">
        <h2 className="plan-heading">Choose Your Plan</h2>
        <div className="plans-container">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? "selected" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="plan-header">{plan.title}</div>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {selectedPlan && (
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe to {plans.find((p) => p.id === selectedPlan)?.title.split(" ")[0]}
          </button>
        )}
      </main>
    </div>
  );
}


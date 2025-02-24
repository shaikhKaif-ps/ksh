import Parent from "./Parent";

export default function PFetch() {
  const staticData = {
    "Case Studies": [
      {
        id: 1,
        title: "Creating opportunities for Kawasaki",
        content:
          "How we built Kawasaki's first integrated manufacturing and R&D facility in India?",
      },
      {
        id: 2,
        title: "Jabil + KSH INFRA",
        content: "Jabil + KSH INFRA.",
      },
      {
        id: 3,
        title: "Another Case Studies Title 3",
        content: "Another case studies",
      },
      { id: 4, title: "Case Studies Title 4", content: "Case study 4" },
    ],
    News: [
      { id: 5, title: "Global Markets Surge", content: "News 1" },
      { id: 6, title: "Policy Reforms Announced", content: "News 2" },
      { id: 7, title: "Tech Giants Merge", content: "News 3" },
      { id: 8, title: "Rising Economy Outlook", content: "News 4" },
    ],
    "Press Release": [
      { id: 9, title: "New Product Launch", content: "Press Release 1" },
      { id: 10, title: "Merger Announcement", content: "Press Release 3" },
      {
        id: 11,
        title: "Quarterly Financial Update",
        content: "Press Release 2",
      },
      {
        id: 12,
        title: "Strategic Partnership Formed",
        content: "Press Release 4",
      },
    ],
    Others: [
      {
        id: 13,
        title: "CEO Interview Insights",
        content: "CEO Interview Insights 1",
      },
      {
        id: 14,
        title: "Community Initiative Kickoff",
        content: "CEO Interview Insights 2",
      },
      {
        id: 15,
        title: "Industry Analysis Report",
        content: "CEO Interview Insights 3",
      },
      {
        id: 16,
        title: "Upcoming Event Highlights",
        content: "CEO Interview Insights 4",
      },
    ],
  };

  return <Parent staticData={staticData} />;
}

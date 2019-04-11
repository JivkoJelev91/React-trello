let arr = {
  "lanes": [
    {
      "id": "PLANNED",
      "title": "Planned Tasks",
      "label": "1/10",
      "cards": [
        {
          "id": "Milk",
          "title": "Buy milk",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "2 Gallons of milk at the Deli store"
        },
        {
          "id": "Plan2",
          "title": "Dispose Garbage",
          "label": "10 mins",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Sort out recyclable and waste as needed"
        },
        {
          "id": "Plan3",
          "title": "Write Blog",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Can AI make memes?"
        },
        {
          "id": "Plan4",
          "title": "Pay Rent",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Transfer to bank account"
        }
      ]
    },
    {
      "id": "WIP",
      "title": "Work In Progress",
      "label": "1/10",
      "cards": [
        {
          "id": "Wip1",
          "title": "Clean House",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
        }
      ]
    },
    {
      "id": "TEST",
      "title": "TEST",
      "label": "0/0",
      "cards": []
    },
    {
      "id": "COMPLETED",
      "title": "Completed",
      "style": {"width": 280},
      "label": "2/5",
      "cards": [
        {
          "id": "Completed1",
          "title": "Practice Meditation",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Use Headspace app"
        },
        {
          "id": "Completed2",
          "title": "Maintain Daily Journal",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Use Spreadsheet for now"
        }
      ]
    },
    {
      "id": "ARCHIVED",
      "title": "Archived",
      "label": "1/10",
      "cards": [
        {
          "id": "Archived1",
          "title": "Go Trekking",
          "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
          "description": "Completed 10km on cycle"
        }
      ]
    }
  ]
}

module.exports = arr;
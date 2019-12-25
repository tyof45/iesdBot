const TeamModalSettingSelect = require('./TeamModalSettingSelect');
const ModalPlainTextInput = require('./ModalPlainTextInput');
const ModalMultiUsersSelect = require('./ModalMultiUsersSelect');
const Divider = require('./Divider');

const TeamManagerModal = () => {
  return {
    title: {
      type: "plain_text",
      text: "Edit Team Info",
      emoji: true
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true,
    },
    callback_id: "edit_team_info",
    blocks: [
      ModalPlainTextInput(
        "team_name", // Action ID
        "Test Name", // Initial value
        "What would you like to name your team?", // Placeholder Text
        "Team Name" // Label Text
      ),
      ModalMultiUsersSelect(
        "members", // Action ID
        ["UFL9S0KSP"], // Initial Users
        "Who else will be working with you?", // Placeholder Text
        "Members" // Label Text
      ),
      TeamModalSettingSelect("open"),
      Divider(),
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "LEAVE TEAM",
            },
            style: "danger",
            action_id: "leave_team"
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "DISBAND TEAM",
            },
            style: "danger",
            action_id: "disband_team"
          }
        ]
      },
    ]
  }
}

module.exports = TeamManagerModal;
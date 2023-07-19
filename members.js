function skillsMembers(){
  return {
    restrict: 'E',
    templateUrl: 'partials/members.html',
    controller: 'MembersCtrl',
    controllerAs: 'membersCtrl',
    bindToController: true,
    scope: {
      members: '=',
      skills: '=',
      selectedSkill: '=',
      selectedMember: '='
    }
  };
} 
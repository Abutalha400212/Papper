import React from 'react';
import ManageFinancialProject from '../../../Components/CommentSection/ManageFinancialProject';
import ManageTeamTask from '../../../Components/CommentSection/ManageTeamTask';
import ManageTruckProject from '../../../Components/CommentSection/ManageTruckProject';

const ReviewSection = () => {
    return (
      <div className='grid gap-y-20 mb-10'>
        <ManageTruckProject/>
        <ManageTeamTask/>
        <ManageFinancialProject/>
      </div>
    );
};

export default ReviewSection;
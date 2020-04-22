var vm = new Vue({
	el: '#main',
	data: {
		testInput: '2',
		testItem: 'Hi Liza. This is the first Vue app you will build',
		testItem2: 'This is another',
		array: [
			{
				REASON_DESCRIPTION:
					"<b>The claim you submitted is for an Over the Counter (OTC) drug or medicine.  A physician's prescription is required for reimbursement.</b>",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 405,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is for an Over the Counter (OTC) drug or medicine.  A physician's prescription is required for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 105,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is for an Over the Counter (OTC) drug or medicine.  A physician's prescription is required for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 205,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is for an Over the Counter (OTC) drug or medicine.  A physician's prescription is required for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 305,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is for an Over the Counter (OTC) drug or medicine.  A physician's prescription is required for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 505,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Over-the-counter medicines are an ineligible expense for reimbursement from a dependent day care FSA.  ',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 504,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'The claim you submitted has both a medical and a non-medical purpose.  A signed letter of medical necessity from your doctor is required.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 106,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is not an eligible expense under your employer's limited-purpose HRA plan. Your employer has structured the plan so that only medical expenses are eligible for reimbursement. Prescription, Dental and Vision expenses are not eligible for reimbursement under the terms of your employer's plan.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 107,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted did not include an Explanation of Benefits (EOB). Your employer's limited-purpose HRA plan requires that you substantiate your claim by submitting a copy of the EOB provided by your medical plan benefit carrier. Contact the carrier of your medical plan to obtain an EOB.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 108,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"A separate claim form must be submitted for each family member's expenses.  To resubmit this claim, complete a BAS claim form for each family member submitting expenses for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 171,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"A separate claim form must be submitted for each family member's expenses.  To resubmit this claim, complete a BAS claim form for each family member submitting expenses for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 271,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"A separate claim form must be submitted for each family member's expenses.  To resubmit this claim, complete a BAS claim form for each family member submitting expenses for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 371,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"A separate claim form must be submitted for each family member's expenses.  To resubmit this claim, complete a BAS claim form for each family member submitting expenses for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 471,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					"A separate claim form must be submitted for each family member's expenses.  To resubmit this claim, complete a BAS claim form for each family member submitting expenses for reimbursement.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 571,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'The claim form you submitted was not signed.  BAS is not permitted to process claims that include an incomplete claim form.  You may resubmit the claim by signing the claim form and returning it to BAS with the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 102,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The claim was submitted with an invalid claim form.  To resubmit this claim, complete a BAS Spending Account claim form and include the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 170,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Duplicate charge. The expense you submitted was previously considered for payment.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 182,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Non-prescription drugs are not an eligible expense.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 183,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The claim you submitted has both a medical and a non-medical purpose. A signed letter of medical necessity from your medical provider is required for reimbursement. ',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 184,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION: 'Medical premiums are not eligible expenses.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 185,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The claim was submitted with an invalid claim form.  To resubmit this claim, complete a BAS Spending Account claim form and include the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 270,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'The total amount you claimed is not equal to the amount shown as paid on the submitted expense receipt.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 303,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'Over-the-counter vision supplies are an ineligible expense.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 304,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'A dependent day care expense is not eligible for reimbursement from a health flexible spending account.  The expense must be for medical care.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 330,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is not an eligible expense under your employer's limited-purpose HRA plan.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 207,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted is not an eligible expense under your employer's limited-purpose HRA plan.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 307,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"The expense is not eligible for reimbursement under the terms of your employer's plan.",
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 911,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 979,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 801,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 802,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 803,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 804,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 805,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 806,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 807,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 808,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 809,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 810,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 811,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 812,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 813,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 814,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 815,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 816,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 817,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 818,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 819,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 820,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 821,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 822,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 823,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 824,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 825,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 826,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 827,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 828,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 829,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 830,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 831,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 832,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 833,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 834,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 835,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 836,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 837,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 838,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 839,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 840,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 841,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 842,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 843,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 844,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 845,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 846,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 847,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 848,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 849,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 850,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 851,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 852,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 853,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 854,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 855,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 856,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 857,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 858,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 859,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 860,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 861,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 862,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 863,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 864,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 865,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 866,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 867,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 868,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 869,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 870,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 871,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 872,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 873,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 874,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 875,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 876,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 877,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 878,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 879,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 880,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 881,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 882,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 883,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 884,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 885,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 886,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 887,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 888,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 889,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 890,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 891,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 892,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 893,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION:
					'The claim was submitted with an invalid claim form.  To resubmit this claim, complete a BAS Spending Account claim form and include the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 370,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'Shipping/handling or gratuity is not an eligible expense.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 381,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'Duplicate charge. The expense you submitted was previously considered for payment.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 382,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not for medical care.  Section 213 of the IRS Code states that "medical care" means amounts paid for the diagnosis, cure, mitigation, treatment or prevention of disease, or for the purpose of affecting any structure or function of the body.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 101,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The total amount you claimed is not equal to the amount shown as paid on the submitted expense receipt.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 103,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expense not eligible until insurance deductible is reached.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 104,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'A dependent day care expense is not eligible for reimbursement from a health flexible spending account.  The expense must be for medical care.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 130,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The expense was not incurred during the coverage period.  The expense must be incurred (services rendered) during the period of coverage.  Expenses incurred before or after the period of coverage are not eligible.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 140,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"The Explanation Of Benefits (EOB) you submitted from your primary insurer indicates that the services were provided by a participating provider, and that the provider will need to accept the insurer's payment as payment in full.  The unpaid amount indicated on the EOB is not a billable expense by the provider.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 150,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					"Cosmetic surgery is an ineligible expense.  Section 213 of the IRS Code states that \"the term 'medical care'  does not include cosmetic surgery or other similar procedures, unless the surgery or procedure is necessary to ameliorate a deformity arising from, or directly related to, a congenital abnormality, a personal injury resulting form an accident or trauma, or disfiguring disease.\"  If you believe your claim meets these requirements, you may resubmit the claim along with a physician's statement that certifies the expense. ",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 160,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The expense should be submitted first to your primary medical insurance carrier.  Any unpaid balance may be submitted for reimbursement from your FSA if it meets the FSA requirements.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 180,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The claim you submitted is being reviewed by your insurance carrier at this time and cannot be processed. Once you receive documentation that your claim is complete you may resubmit for consideration.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 181,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Taxes, shipping and handling charges or gratuities are not eligible expenses.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 186,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The explanation of benefits from your insurance carrier explains that your claim has been previously submitted and processed. Therefore no payment can be made.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 187,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not for medical care.  Section 213 of the IRS Code states that "medical care" means amounts paid for the diagnosis, cure, mitigation, treatment or prevention of disease, or for the purpose of affecting any structure or function of the body.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 201,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'The claim form you submitted was not signed.  BAS is not permitted to process claims that include an incomplete claim form.  You may resubmit the claim by signing the claim form and returning it to BAS with the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 202,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'Expense not eligible until insurance deductible is reached.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 204,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted did not include a valid itemized expense receipt. Valid itemized expense receipts must contain (1) Service provider's name (2) Dates of service (3) Amount of charges (4) Patient's full name (5) Description of item or service provided. A cash register receipt does not qualify as a valid receipt. An insurer's or provider's \"Explanation of Benefits\" (EOB) statement typically contains all of the necessary information and may be submitted for consideration in lieu of a valid receipt.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 220,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'A dependent day care expense is not eligible for reimbursement from a health flexible spending account.  The expense must be for medical care.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 230,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'The expense was not incurred during the coverage period.  The expense must be incurred (services rendered) during the period of coverage.  Expenses incurred before or after the period of coverage are not eligible.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 240,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"The Explanation Of Benefits (EOB) you submitted from your primary insurer indicates that the services were provided by a participating provider, and that the provider will need to accept the insurer's payment as payment in full.  The unpaid amount indicated on the EOB is not a billable expense by the provider.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 250,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"Cosmetic surgery is an ineligible expense.  Section 213 of the IRS Code states that \"the term 'medical care'  does not include cosmetic surgery or other similar procedures, unless the surgery or procedure is necessary to ameliorate a deformity arising from, or directly related to, a congenital abnormality, a personal injury resulting form an accident or trauma, or disfiguring disease.\"  If you believe your claim meets these requirements, you may resubmit the claim along with a physician's statement that certifies the expense.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 260,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'The expense should be submitted first to your primary dental insurance carrier.  Any unpaid balance may be submitted for reimbursement from your FSA if it meets the FSA requirements.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 280,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not for medical care.  Section 213 of the IRS Code states that "medical care" means amounts paid for the diagnosis, cure, mitigation, treatment or prevention of disease, or for the purpose of affecting any structure or function of the body.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 301,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'The claim form you submitted was not signed.  BAS is not permitted to process claims that include an incomplete claim form.  You may resubmit the claim by signing the claim form and returning it to BAS with the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 302,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted did not include a valid itemized expense receipt. Valid itemized expense receipts must contain (1) Service provider's name (2) Dates of service (3) Amount of charges (4) Patient's full name (5) Description of item or service provided. A cash register receipt does not qualify as a valid receipt. An insurer's or provider's \"Explanation of Benefits\" (EOB) statement typically contains all of the necessary information and may be submitted for consideration in lieu of a valid receipt.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 320,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'The expense was not incurred during the coverage period.  The expense must be incurred (services rendered) during the period of coverage.  Expenses incurred before or after the period of coverage are not eligible.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 340,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"The Explanation Of Benefits (EOB) you submitted from your primary insurer indicates that the services were provided by a participating provider, and that the provider will need to accept the insurer's payment as payment in full.  The unpaid amount indicated on the EOB is not a billable expense by the provider.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 350,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					"Cosmetic surgery is an ineligible expense.  Section 213 of the IRS Code states that \"the term 'medical care'  does not include cosmetic surgery or other similar procedures, unless the surgery or procedure is necessary to ameliorate a deformity arising from, or directly related to, a congenital abnormality, a personal injury resulting form an accident or trauma, or disfiguring disease.\"  If you believe your claim meets these requirements, you may resubmit the claim along with a physician's statement that certified the expense.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 360,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'The expense should be submitted first to your primary vision insurance carrier.  Any unpaid balance may be submitted for reimbursement from your FSA if it meets the FSA requirements.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 380,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'Item is not a prescribed drug.  Section 213 of the IRS Code states that a "prescribed drug" means a drug or biological which requires a prescription of a physician for its use by an individual.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 401,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The expense was not incurred during the coverage period.  The expense must be incurred (services rendered) during the period of coverage.  Expenses incurred before or after the period of coverage are not eligible.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 440,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The expense should be submitted first to your primary prescription insurance carrier.  Any unpaid balance may be submitted for reimbursement from your FSA if it meets the FSA requirements.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 480,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The expense was not incurred during the coverage period.  The expense must be incurred (services rendered) during the period of coverage.  Expenses incurred before or after the period of coverage are not eligible.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 540,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Duplicate charge. The expense you submitted was previously considered for payment.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 541,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Duplicate charge. Previously considered. Payment issued or charge was denied. See prior explanation of benefit forms.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 561,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Confirmation of receipt of claim.  Payment pending final processing of claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 902,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'This claim has been voided.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 905,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'You have exhausted your annual flexible spending account election for this claim year.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 907,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The service date of this claim is prior to your flexible spending account effective date.  The service dates must be between your coverage effective and ending dates. ',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 908,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Date of service is within your dates of frozen pay period.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 909,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Payment cannot be made before services are rendered. This claim will automatically be reviewed when the service date has been reached.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 915,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Date of service is not within your active dates of employment. ',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 925,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'This dependent care claim has been broken down for each dependent.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 956,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Processing for this coverage has been stopped.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 961,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The claim form you submitted was not signed.  BAS is not permitted to process claims that include an incomplete claim form.  You may resubmit the claim by signing the claim form and returning it to BAS with the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 402,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The total amount you claimed is not equal to the amount shown as paid on the submitted expense receipt.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 403,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'Over-the-counter medicines are an ineligible expense.  IRS Code section 213 states the "term \'prescribed drug\' means a drug or biological which requires a prescription of a physician for its use by an individual."',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 404,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted did not include a valid itemized expense receipt. Valid itemized expense receipts for prescriptions contain (1) Service provider's/pharmacy name (2) Dates of service (fill date) (3) Amount of charges (4) Patient's full name (5) Prescription Number. A cash register receipt does not qualify as a valid receipt. An insurer's or provider's \"Explanation of Benefits\" (EOB) statement typically contains all of the necessary information and may be submitted for consideration in lieu of a valid receipt.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 420,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'A dependent day care expense is not eligible for reimbursement from a health flexible spending account.  The expense must be for medical care.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 430,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					"The Explanation Of Benefits (EOB) you submitted from your primary insurer indicates that the services were provided by a participating provider, and that the provider will need to accept the insurer's payment as payment in full.  The unpaid amount indicated on the EOB is not a billable expense by the provider.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 450,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					"Cosmetic surgery is an ineligible expense.  Section 213 of the IRS Code states that \"the term 'medical care'  does not include cosmetic surgery or other similar procedures, unless the surgery or procedure is necessary to ameliorate a deformity arising from, or directly related to, a congenital abnormality, a personal injury resulting form an accident or trauma, or disfiguring disease.\"  If you believe your claim meets these requirements, you may resubmit the claim with a physician's statement as evidence thereof.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 460,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The claim was submitted with an invalid claim form.  To resubmit this claim, complete a BAS Spending Account claim form and include the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 470,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'Duplicate charge. The expense you submitted was previously considered for payment.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 481,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The item is not an eligible dependent day care expense.  Sections 129 and 21 of the IRS Code state that the expense is only reimbursable if it is an employment-related qualified dependent care expense.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 501,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'The claim form you submitted was not signed.  BAS is not permitted to process claims that include an incomplete claim form.  You may resubmit the claim by signing the claim form and returning it to BAS with the corresponding itemized receipts.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 502,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'The total amount you claimed is not equal to the amount shown as paid on the submitted expense receipt.  We may only reimburse expenses that you have already paid.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 503,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'The claim you submitted did not include a valid itemized expense receipt.  Valid itemized expense receipts contain (1) name of qualifying dependent, (2) name of provider, (3) dates of service, (4) description of service, (5) taxpayer identification number or social security number of the person performing the service or a statement that you tried to obtain the TIN/SSN but could not.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 520,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'A medical care expense is not eligible under a dependent day care flexible spending account.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 530,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'A BAS claim form was not submitted with this claim. Please complete a claim form and resubmit this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 542,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Cosmetic surgery is not an eligible expense under a dependent day care flexible spending account.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 560,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Please submit an explanation of benefits from your insurance carrier.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 562,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION:
					'Your employer does not offer a flexible spending account.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 901,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Partial payment is due to the exhaustion of your annual election amount during the processing of this claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 903,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Partial payment due to the exhaustion of your year-to-date contributed funds. The remaining balance of this claim will automatically be paid upon our regular receipt of your payroll contributions (deductions).',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 904,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'You have not elected a flexible spending account; therefore, this claim is not eligible for payment.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 906,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Your dependent day care claim is set up as an automatically reoccurring claim for your convenience. The "Amount" column represents your annual election less any prior paid amounts. The "Allowed" column represents the amount you contribute each pay period. Your "New Spending Account Balance" shown below will be automatically processed on your behalf as each subsequent pay period occurs.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 910,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Claim Payments have been suspended until your account termination has been fully processed and audited.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 917,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Confirmation of receipt of claim.  Payment pending final processing of claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 950,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Your flexible spending account participation ended prior to the service date of the claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 962,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The service date of this claim is prior to your flexible spending account effective date.  Eligible claim expenses must be incurred during the coverage period.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 964,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The service date for this claim is after your flexible spending account termination date.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 965,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The claimant for this claim is neither the employee nor a dependent.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 971,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Regeneration of dependent care claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 974,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Duplicate claim.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 975,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION: 'Zero dollar value.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 976,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The service date for this dependent claim is not within the flexible spending account coverage period.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 972,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The dependent listed as the claimant is 13 years of age or older.  Government regulations do not permit reimbursement of claims for child dependents age 13 or older.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 973,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The total amount you claimed is not equal to the amount shown as paid on the submitted expense receipt.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 203,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					"The claim you submitted did not include a valid itemized expense receipt. Valid itemized expense receipts must contain (1) Service provider's name (2) Dates of service (3) Amount of charges (4) Patient's full name (5) Description of item or service provided. A cash register receipt does not qualify as a valid receipt. An insurer's or provider's \"Explanation of Benefits\" (EOB) statement typically contains all of the necessary information and may be submitted for consideration in lieu of a valid receipt.",
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 120,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The submission date of the claim is beyond the permissible submission period for the plan year selected.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 963,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The submission date for this claim is more than 180 days after the end of the plan year.  Plan rules require that you submit your claims either within your Plan Year or within 180 days following the end of the Plan Year.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 966,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'The receipt that you submitted was not legible or a portion of the documentation was not legible. Please provide a clear copy of the claim form or another copy of the current receipt that was provided with this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 190,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION: 'Move employee to new division.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 977,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Item is not an expense for medical care that may be reimbursed from a flexible spending account plan.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 191,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'The receipt that you submitted was not legible or a portion of the documentation was not legible. Please provide a clear copy of the claim form or another copy of the current receipt that was provided with this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 290,
				CLAIM_GROUP: 'D',
			},
			{
				REASON_DESCRIPTION:
					'The receipt that you submitted was not legible or a portion of the documentation was not legible. Please provide a clear copy of a statement or another copy of the current receipt that was provided with this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 390,
				CLAIM_GROUP: 'V',
			},
			{
				REASON_DESCRIPTION:
					'The receipt that you submitted was not legible or a portion of the documentation was not legible. Please provide a clear copy of the claim form or another copy of the current receipt that was provided with this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 490,
				CLAIM_GROUP: 'P',
			},
			{
				REASON_DESCRIPTION:
					'The receipt that you submitted was not legible or a portion of the documentation was not legible. Please provide a clear copy of the claim form or another copy of the current receipt that was provided with this claim.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 590,
				CLAIM_GROUP: 'C',
			},
			{
				REASON_DESCRIPTION: 'Negative dollar value.',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 978,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'This claim amount has been applied to your annual self-insured retention value.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 192,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'This claim has been partially applied against your self-insured retention value and the remainder payable with the corresponding item.',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 193,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Menstrual product expenses incurred prior to 1/1/2020 are not eligible for reimbursement',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 116,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Your employer does not permit reimbursement of menstrual products',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 115,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Your employer does not permit reimbursement of OTC expenses without a written prescription',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 109,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expenses submitted with a Debit Card Offset Claim Form were approved and have been applied towards your ineligible repayment amount',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 110,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expenses submitted with a Debit Card Offset Claim Form were partially applied towards your ineligible repayment amount',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 111,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expenses submitted with a Debit Card Offset Claim Form were previously paid from your account, this duplicate item is not eligible for consideration',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 113,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION:
					'Expenses submitted with a Debit Card Offset Claim Form were submitted with inadequate Documentation, a valid itemized receipt is required for consideration',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 112,
				CLAIM_GROUP: 'M',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 894,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 895,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 896,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 897,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 898,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION: 'Client/Employer Reviewed & Denied',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 899,
				CLAIM_GROUP: 'A',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not eligible because you are enrolled in a Health Savings Account (HSA) medical plan, which limits your FSA to dental & vision claims',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 912,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not eligible because you are enrolled in a Health Savings Account (HSA) medical plan, which limits your FSA to dental claims',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 913,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Expense is not eligible because you are enrolled in a Health Savings Account (HSA) medical plan, which limits your FSA to vision claims',
				REASON_CODE_TYPE: 'S',
				STATUS: 'A',
				REASON_CODE: 914,
				CLAIM_GROUP: 'S',
			},
			{
				REASON_DESCRIPTION:
					'Over-the-counter medicine & drug expenses incurred prior to 1/1/2020 are not eligible for reimbursement without a written prescription',
				REASON_CODE_TYPE: 'U',
				STATUS: 'A',
				REASON_CODE: 114,
				CLAIM_GROUP: 'M',
			},
		],
	},
});

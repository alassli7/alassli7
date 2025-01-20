// utils/calculateLoan.js

/**
 * حساب المبلغ الإجمالي للقرض.
 *
 * @param {number} amount - مبلغ القرض الأساسي.
 * @param {number} interestRate - معدل الفائدة كنسبة مئوية.
 * @returns {number} - المبلغ الإجمالي بعد إضافة الفائدة.
 * @throws {Error} - إذا كانت المدخلات غير صالحة.
 */
export const calculateTotalAmount = (amount, interestRate) => {
  // التحقق من أن المدخلات أرقام صحيحة
  if (typeof amount !== 'number' || typeof interestRate !== 'number') {
    throw new Error('Both amount and interestRate must be numbers.');
  }

  // التحقق من أن القيم غير سالبة
  if (amount < 0 || interestRate < 0) {
    throw new Error('Amount and interestRate must be non-negative.');
  }

  // حساب مبلغ الفائدة
  const interestAmount = (amount * interestRate) / 100;

  // حساب المجموع الكلي
  return amount + interestAmount;
};

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  mount * interestRate) / 100;
  const totalAmount = amount + interestAmount;
  return totalAmount;
};

// app/screens/BorrowerScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import PushNotification from 'react-native-push-notification';

// بيانات القرض (مثال)
const loanData = {
  borrowerName: 'محمد أحمد',
  loanAmount: 5000,
  interestRate: 5,
  totalAmount: 5250,
  startDate: new Date('2025-01-01'),
  endDate: new Date('2025-12-31'),
  dueDate: new Date('2025-06-30'), // تاريخ استحقاق الدفع
  payments: [
    { date: '2025-02-01', amount: 500 },
    { date: '2025-03-01', amount: 500 },
  ],
};

const BorrowerScreen = () => {
  const [loan, setLoan] = useState(loanData);
  const [remainingAmount, setRemainingAmount] = useState(loanData.totalAmount);

  useEffect(() => {
    // حساب المبلغ المتبقي بعد المدفوعات
    const totalPaid = loan.payments.reduce((sum, payment) => sum + payment.amount, 0);
    setRemainingAmount(loan.totalAmount - totalPaid);

    // التحقق إذا كان اليوم هو يوم استحقاق الدفع
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    
    if (today.toDateString() === dueDate.toDateString()) {
      sendDueDateNotification();
    }
  }, [loan]);

  // إرسال الإشعار عند تاريخ الاستحقاق
  const sendDueDateNotification = () => {
    PushNotification.localNotification({
      title: "استحقاق الدفع",
      message: `اليوم هو تاريخ استحقاق الدفع لقرضك. يرجى الدفع في أقرب وقت.`,
    });
  };

  // عرض تفاصيل القرض
  const renderLoanDetails = () => (
    <View style={{ marginBottom: 20 }}>
      <Text>اسم المقترض: {loan.borrowerName}</Text>
      <Text>المبلغ الأصلي: {loan.loanAmount} ريال</Text>
      <Text>معدل الفائدة: {loan.interestRate}%</Text>
      <Text>المبلغ الإجمالي: {loan.totalAmount} ريال</Text>
      <Text>تاريخ بداية القرض: {loan.startDate.toLocaleDateString()}</Text>
      <Text>تاريخ نهاية القرض: {loan.endDate.toLocaleDateString()}</Text>
      <Text>تاريخ استحقاق الدفع: {loan.dueDate.toLocaleDateString()}</Text>
      <Text>المبلغ المتبقي: {remainingAmount} ريال</Text>
    </View>
  );

  // عرض سجل المدفوعات
  const renderPayments = () => (
    <View style={{ marginBottom: 20 }}>
      <Text>سجل المدفوعات:</Text>
      <FlatList
        data={loan.payments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`تاريخ الدفع: ${item.date} - المبلغ: ${item.amount} ريال`}</Text>
        )}
      />
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      {renderLoanDetails()}
      {renderPayments()}
      {/* إضافة زر دفع القسط أو خيارات أخرى */}
      <Button title="دفع قسط" onPress={() => { /* إضافة وظيفة دفع القسط */ }} disabled={true} />
    </View>
  );
};

export default BorrowerScreen;

const AddLoanScreen = ({ navigation }) => {
  // حالة القيم المدخلة
  const [borrower, setBorrower] = useState('');
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  // دالة اختيار تاريخ بداية القرض
  const handleStartDateChange = (event, selectedDate) => {
    setStartDate(selectedDate || startDate);
    setShowStartDate(false);
  };

  // دالة اختيار تاريخ نهاية القرض
  const handleEndDateChange = (event, selectedDate) => {
    setEndDate(selectedDate || endDate);
    setShowEndDate(false);
  };

  // دالة إضافة القرض
  const handleAddLoan = () => {
    const loanAmount = parseFloat(amount);
    const interest = parseFloat(interestRate);

    if (isNaN(loanAmount) || isNaN(interest)) {
      alert('الرجاء إدخال بيانات صحيحة');
      return;
    }

    const total = calculateTotalAmount(loanAmount, interest);
    setTotalAmount(total);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* إدخال اسم المقترض */}
      <Text>اسم المقترض:</Text>
      <TextInput
        value={borrower}
        onChangeText={setBorrower}
        placeholder="أدخل اسم المقترض"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      {/* إدخال المبلغ والفائدة */}
      <Text>المبلغ:</Text>
      <TextInput
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="أدخل المبلغ"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>معدل الفائدة (%)</Text>
      <TextInput
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
        placeholder="أدخل الفائدة"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="اختار تاريخ بداية القرض" onPress={() => setShowStartDate(true)} />
      {showStartDate && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleStartDateChange}
        />
      )}

      <Button title="اختار تاريخ نهاية القرض" onPress={() => setShowEndDate(true)} />
      {showEndDate && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={handleEndDateChange}
        />
      )}

      <Text>تاريخ بداية القرض: {startDate.toLocaleDateString()}</Text>
      <Text>تاريخ نهاية القرض: {endDate.toLocaleDateString()}</Text>

      <Text>المبلغ الإجمالي: {totalAmount}</Text>

      <Button title="إضافة القرض" onPress={handleAddLoan} />
    </View>
  );
};

expo


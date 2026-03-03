import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  TrendingDown, 
  FileWarning, 
  Receipt,
  AlertCircle,
  FileX2,
  Activity,
  ArrowRight,
  Wallet,
  PiggyBank,
  Banknote,
  ShieldAlert,
  ArrowDownRight,
  ArrowUpRight,
  UserX,
  Zap,
  Hammer
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

// Data Extracted from Winter Hills 77 PDF
const deficitData = [
  { category: "Monthly Deficit (Avg)", amount: 571000 },
  { category: "Outstanding Maint.", amount: 1619000 },
];

const expenseData = [
  { name: "Manpower (116 Staff)", value: 2484322, color: "hsl(var(--chart-1))", description: "Security (42), Housekeeping (30), Technical (27), etc." },
  { name: "STP Treated Water", value: 394167, color: "hsl(var(--chart-2))", description: "Water treatment and disposal charges." },
  { name: "Other AMCs (DG, Fire, CCTV)", value: 192829, color: "hsl(var(--chart-3))", description: "Annual maintenance for critical infrastructure." },
  { name: "Lift AMC", value: 167071, color: "hsl(var(--chart-4))", description: "Elevator maintenance contract." },
  { name: "Abante Management Fee", value: 150000, color: "hsl(var(--chart-5))", description: "Facility management agency fee." },
  { name: "33 KV Line & Others", value: 133403 + 50540 + 34017 + 31086, color: "hsl(var(--warning))", description: "Line maintenance, vending, garbage, and regular water." }
];

const incomeData = [
  { source: "Bank Interest (IDFC + HDFC)", amount: 392926, status: "Investment Return" },
  { source: "Move In/Out & Penalties", amount: 66136, status: "Variable" },
  { source: "Mutation Charges", amount: 55000, status: "Variable" },
  { source: "Lift & Other Ads", amount: 38820, status: "Recurring" },
  { source: "Rent (Keystone & Restaurant)", amount: 30000, status: "Recurring" },
  { source: "Canopy By Mygate", amount: 12296, status: "Recurring" }
];

const electricityData = {
  billing: 1691207,
  expenditure: 1566545, // 1324142 (DHBVN) + 242403 (Diesel/DAFF)
  surplus: 124662
};

const majorDefaulters = [
  { flat: "E - 001", name: "Harsh Jain", amount: 172814 },
  { flat: "E - 403", name: "Pavaninder Singh", amount: 156312 },
  { flat: "A - 902", name: "Rahul Mehta", amount: 137605 },
  { flat: "J - 704", name: "M. Animuthu", amount: 137605 },
  { flat: "J - 703", name: "L. Saravanan", amount: 119914 }
];

const oneTimeExpenses = [
  { item: "Ground Floor Lift Lobby", status: "Completed" },
  { item: "Water Body & Cycle Stand", status: "Completed" },
  { item: "Access Card & Biometric Sys", status: "Completed" },
  { item: "Park Plus Boom Barrier", status: "Completed" },
  { item: "Lift Cabin Cladding", status: "Pending" },
  { item: "LED Signage & Bus Stand", status: "Pending" },
  { item: "Installation of Borewell", status: "Pending" }
];

export default function Dashboard() {
  const totalExpense = 4540171; // Total Maintenance Expense from PDF
  const totalMonthlyBilling = 3969000; // Monthly Maintenance Billing from PDF
  const totalAdditionalIncome = incomeData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans pb-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">Audit Mode</Badge>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Winter Hills 77, Gurgaon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Society Expenses & Income Audit</h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              Financial performance review since handover (August 2024 to January 2025), highlighting maintenance deficits, operational costs, and capital expenditures.
            </p>
          </div>
          <div className="text-right">
             <div className="flex items-center gap-2 justify-end mb-1">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <p className="text-sm text-orange-500 font-medium">Proposed Maint. Hike</p>
             </div>
            <p className="text-3xl font-mono font-bold text-foreground">0.77<span className="text-lg text-muted-foreground font-sans">/sqft</span></p>
          </div>
        </div>

        {/* High Level Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/40 bg-card/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Receipt size={40} className="text-foreground" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="font-medium">Avg Monthly Billing (CAM)</CardDescription>
              <CardTitle className="text-2xl font-mono">₹{(totalMonthlyBilling/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                Standard maintenance collection
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Activity size={40} className="text-destructive" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-destructive/80 font-medium">Avg Monthly Expenses</CardDescription>
              <CardTitle className="text-2xl font-mono text-destructive">₹{(totalExpense/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <ArrowDownRight className="h-3 w-3 text-destructive" />
                Actual operational cost
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20 bg-orange-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <TrendingDown size={40} className="text-orange-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-orange-500/80 font-medium">Avg Monthly Deficit</CardDescription>
              <CardTitle className="text-2xl font-mono text-orange-500">₹5.71 L</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-xs text-muted-foreground mt-1">Shortfall requiring CAM increase.</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <PiggyBank size={40} className="text-green-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-green-500/80 font-medium">Avg Additional Income</CardDescription>
              <CardTitle className="text-2xl font-mono text-green-500">₹{(totalAdditionalIncome/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">Used to bridge collection gaps.</p>
            </CardContent>
          </Card>
        </div>

        {/* Operational Expenses Breakdown */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="text-primary-foreground h-5 w-5" />
                  Monthly Maintenance Expense Breakdown
                </CardTitle>
                <CardDescription>Major components driving the ₹45.4L total maintenance cost.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
              <div className="h-[320px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                      formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Cost']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                {expenseData.map((expense, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: expense.color }}></span>
                        {expense.name}
                      </span>
                      <span className="font-mono font-bold">₹{(expense.value/100000).toFixed(2)}L</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={(expense.value / totalExpense) * 100} className="h-1.5" style={{ "--progress-background": expense.color } as any} />
                      <span className="text-xs text-muted-foreground min-w-[3ch]">{Math.round((expense.value / totalExpense) * 100)}%</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground pl-5">{expense.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Income Sources */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-green-500" />
                Additional Incomes (Non-CAM)
              </CardTitle>
              <CardDescription>Sources of revenue helping bridge the deficit gap.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="overflow-x-auto rounded-md border border-border/40">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Income Source</TableHead>
                      <TableHead className="text-right">Avg Monthly (₹)</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomeData.map((income, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{income.source}</TableCell>
                        <TableCell className="text-right font-mono text-green-500">{income.amount.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                           <Badge variant="outline" className="text-muted-foreground font-normal">{income.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/30 font-bold">
                      <TableCell>Total Additional Income:</TableCell>
                      <TableCell className="text-right font-mono text-green-500">₹{totalAdditionalIncome.toLocaleString('en-IN')}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Electricity Economics */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Electricity: Expense vs Recovery
              </CardTitle>
              <CardDescription>Average monthly breakdown of power economics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
                     <p className="text-sm text-muted-foreground mb-1">DHBVN Bill</p>
                     <p className="text-xl font-mono">₹13.24 L</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
                     <p className="text-sm text-muted-foreground mb-1">Diesel & DAFF</p>
                     <p className="text-xl font-mono">₹2.42 L</p>
                  </div>
               </div>

               <div className="space-y-3">
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Power Expenditure</span>
                    <span className="font-mono text-destructive font-medium">₹15.66 L</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Billed to Residents</span>
                    <span className="font-mono text-green-500 font-medium">₹16.91 L</span>
                 </div>
                 <div className="h-px w-full bg-border"></div>
                 <div className="flex justify-between text-sm font-bold">
                    <span>Net Surplus / Difference</span>
                    <span className="font-mono text-primary">₹1.24 L</span>
                 </div>
                 <p className="text-xs text-muted-foreground text-right mt-2">Proposal: Decrease CAE by 17 paise/sqft</p>
               </div>
            </CardContent>
          </Card>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Defaulters Table */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserX className="h-5 w-5 text-destructive" />
                Top Maintenance Defaulters
              </CardTitle>
              <CardDescription>Total Outstanding Amount: ₹16.19 Lakhs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border border-border/40">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Flat No.</TableHead>
                      <TableHead>Resident Name</TableHead>
                      <TableHead className="text-right">Outstanding (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {majorDefaulters.map((defaulter, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium font-mono">{defaulter.flat}</TableCell>
                        <TableCell>{defaulter.name}</TableCell>
                        <TableCell className="text-right font-mono text-destructive">{defaulter.amount.toLocaleString('en-IN')}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/10 text-muted-foreground text-sm">
                      <TableCell colSpan={2}>+ 20 Other Defaulters</TableCell>
                      <TableCell className="text-right">₹7.91 L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Capital Projects */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
             <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hammer className="h-5 w-5 text-primary-foreground" />
                Society Upgradation Projects
              </CardTitle>
              <CardDescription>One-time expenses averaging ₹9.80 Lakhs/month.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                     <h4 className="text-sm font-semibold border-b border-border/50 pb-1">Completed Works</h4>
                     <ul className="space-y-2">
                        {oneTimeExpenses.filter(e => e.status === "Completed").map((item, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                              {item.item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h4 className="text-sm font-semibold border-b border-border/50 pb-1">Pending Works</h4>
                     <ul className="space-y-2">
                        {oneTimeExpenses.filter(e => e.status === "Pending").map((item, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                              {item.item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}

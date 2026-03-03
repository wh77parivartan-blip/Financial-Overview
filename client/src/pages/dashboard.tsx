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
  Droplet,
  Users,
  Activity,
  ArrowRight,
  Wallet
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
  Pie,
  Legend
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

const deficitData = [
  { category: "Corpus Fund Missing", amount: 4500000 },
  { category: "Unaccounted Maintenance", amount: 2100000 },
  { category: "Pending Infra Work", amount: 3200000 }
];

const expenseData = [
  { name: "Water Supply (Tankers)", value: 550000, color: "hsl(var(--chart-2))", description: "100% reliant on private tankers. No govt water line available." },
  { name: "Manpower & Security", value: 480000, color: "hsl(var(--chart-1))", description: "Guards, housekeeping, supervisors salaries." },
  { name: "Maintenance Agency", value: 520000, color: "hsl(var(--chart-4))", description: "Facility Management Services (FMS) fixed contract." },
  { name: "STP & Sewer Ops", value: 280000, color: "hsl(var(--chart-3))", description: "No municipal sewer line. High cost for STP operation & waste disposal." },
  { name: "Electricity & DG Fuel", value: 620000, color: "hsl(var(--chart-5))", description: "Common area lighting, lifts, and high diesel consumption." }
];

const billsToClear = [
  { vendor: "Aqua Line Tankers", type: "Water Supply", period: "Last 2 Months", amount: "₹11,00,000", urgency: "Critical - Supply Risk" },
  { vendor: "SecureGuard Solutions", type: "Manpower", period: "Last Month", amount: "₹4,80,000", urgency: "High - Strike Risk" },
  { vendor: "Dakshin Haryana Bijli Vitran Nigam", type: "Electricity", period: "Current Month", amount: "₹3,50,000", urgency: "Critical - Disconnection" },
  { vendor: "Elevate Lifts Co.", type: "Lift AMC", period: "Overdue 6 Months", amount: "₹4,50,000", urgency: "High - Safety Risk" },
  { vendor: "ClearWater Solutions", type: "STP Maintenance", period: "Last 3 Months", amount: "₹3,20,000", urgency: "Medium" }
];

const documentStatus = [
  { name: "Occupancy Certificate (OC)", status: "Missing", risk: "Critical" },
  { name: "Completion Certificate (CC)", status: "Missing", risk: "Critical" },
  { name: "Fire Safety NOC", status: "Expired", risk: "High" },
  { name: "Pollution Control Board NOC", status: "Missing", risk: "High" },
  { name: "Lift Safety Clearance", status: "Available", risk: "Low" },
  { name: "Audited Financials (Past 3 Yrs)", status: "Incomplete", risk: "High" },
];

export default function Dashboard() {
  const totalExpense = expenseData.reduce((acc, curr) => acc + curr.value, 0);
  const totalBillsPending = 2700000; // Sum of billsToClear

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans pb-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">Financial Handover Risk</Badge>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Sector 77, Gurgaon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">RWA Operations & Deficit Audit</h1>
            <p className="text-muted-foreground mt-2 max-w-3xl">
              Analysis of immediate financial liabilities, monthly running expenses (OPEX), and critical pending bills handed over to the new committee.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Immediate Cash Required</p>
            <p className="text-3xl font-mono font-bold text-destructive">₹27.0 L</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-warning/20 bg-warning/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Receipt size={40} className="text-warning" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-warning/80 font-medium">Avg. Maint. Collected</CardDescription>
              <CardTitle className="text-2xl font-mono">₹21.5 L /mo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Monthly inflow from residents.</p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Activity size={40} className="text-destructive" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-destructive/80 font-medium">Actual Monthly OPEX</CardDescription>
              <CardTitle className="text-2xl font-mono">₹{(totalExpense/100000).toFixed(1)} L /mo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Running expenses exceed collections.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Droplet size={40} className="text-blue-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-500/80 font-medium">Water & Sewer Cost</CardDescription>
              <CardTitle className="text-2xl font-mono">₹8.3 L /mo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">No govt lines. 100% tanker & private STP deps.</p>
            </CardContent>
          </Card>

          <Card className="border-red-500/20 bg-red-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Wallet size={40} className="text-red-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-red-500/80 font-medium">Pending Vendor Bills</CardDescription>
              <CardTitle className="text-2xl font-mono text-red-500">₹27.0 L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Immediate liability to clear inherited dues.</p>
            </CardContent>
          </Card>
        </div>

        {/* Financial & Expenses Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Running Expenses Breakdown - Enhanced */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="text-primary-foreground h-5 w-5" />
                    Monthly Running Expenses (OPEX)
                  </CardTitle>
                  <CardDescription>Breakdown of where funds are actually being spent (~₹{(totalExpense/100000).toFixed(2)}L/mo)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-4">
                <div className="h-[280px] w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
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
                
                <div className="space-y-5">
                  {expenseData.map((expense, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: expense.color }}></span>
                          {expense.name}
                        </span>
                        <span className="font-mono font-bold">₹{(expense.value/100000).toFixed(2)}L</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={(expense.value / totalExpense) * 100} className="h-2" style={{ "--progress-background": expense.color } as any} />
                        <span className="text-xs text-muted-foreground min-w-[3ch]">{Math.round((expense.value / totalExpense) * 100)}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5 border-l border-border/50">{expense.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 border-t border-border/40 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-3 text-sm">
                 <AlertTriangle className="text-orange-500 h-4 w-4" />
                 <span className="text-muted-foreground">Collected Maintenance: <strong className="text-foreground">₹21.50 Lakhs</strong></span>
               </div>
               <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground" />
               <div className="flex items-center gap-3 text-sm">
                 <span className="text-muted-foreground">Current Expenditure: <strong className="text-destructive">₹24.50 Lakhs</strong></span>
               </div>
               <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground" />
               <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">Monthly Operating Deficit: ₹3.00 Lakhs</Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Liabilities Table */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileX2 className="h-5 w-5 text-destructive" />
                Pending Bills & Liabilities to Clear
              </CardTitle>
              <CardDescription>Unpaid invoices left by the outgoing body that the new committee must clear immediately to prevent service disruption.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-md border border-border/40">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Vendor / Agency</TableHead>
                      <TableHead>Service Area</TableHead>
                      <TableHead>Pending Period</TableHead>
                      <TableHead className="text-right">Outstanding Amount</TableHead>
                      <TableHead>Risk / Urgency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billsToClear.map((bill, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{bill.vendor}</TableCell>
                        <TableCell>{bill.type}</TableCell>
                        <TableCell className="text-muted-foreground">{bill.period}</TableCell>
                        <TableCell className="text-right font-mono font-bold text-destructive">{bill.amount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="secondary"
                            className={
                              bill.urgency.includes("Critical") ? "bg-destructive/10 text-destructive border-destructive/20" :
                              bill.urgency.includes("High") ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                              "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                            }
                          >
                            {bill.urgency}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/30 font-bold">
                      <TableCell colSpan={3} className="text-right">Total Immediate Liability:</TableCell>
                      <TableCell className="text-right font-mono text-destructive">₹27,00,000</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <Card className="lg:col-span-1 border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-destructive h-5 w-5" />
                Capital Deficits
              </CardTitle>
              <CardDescription>Funds not handed over</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={deficitData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tickFormatter={(value) => `₹${value/100000}L`} stroke="hsl(var(--muted-foreground))" fontSize={11} />
                    <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={100} />
                    <Tooltip 
                      cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                      formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Amount']}
                    />
                    <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                      {deficitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${index + 1}))`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Statutory Documents Status */}
          <Card className="lg:col-span-2 border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileWarning className="text-warning h-5 w-5" />
                Statutory Compliance
              </CardTitle>
              <CardDescription>Missing documents risk RERA penalties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentStatus.map((doc, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-lg bg-muted/30 border border-border/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{doc.name}</span>
                      <Badge 
                        variant="outline" 
                        className={
                          doc.status === "Missing" ? "border-destructive text-destructive" :
                          doc.status === "Expired" ? "border-warning text-warning" :
                          doc.status === "Incomplete" ? "border-orange-500 text-orange-500" :
                          "border-green-500 text-green-500"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                      <span>Risk Level:</span>
                      <span className={
                        doc.risk === "Critical" ? "text-destructive font-bold" :
                        doc.risk === "High" ? "text-warning font-semibold" : ""
                      }>{doc.risk}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

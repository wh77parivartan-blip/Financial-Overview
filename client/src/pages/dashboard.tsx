import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  TrendingDown, 
  FileWarning, 
  Building2, 
  Receipt,
  AlertCircle,
  FileX2,
  HardHat
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const deficitData = [
  { category: "Corpus Fund Missing", amount: 4500000 },
  { category: "Unaccounted Maintenance", amount: 2100000 },
  { category: "Pending Infra Work", amount: 3200000 },
  { category: "Unpaid AMCs", amount: 850000 },
];

const documentStatus = [
  { name: "Occupancy Certificate (OC)", status: "Missing", risk: "Critical" },
  { name: "Completion Certificate (CC)", status: "Missing", risk: "Critical" },
  { name: "Fire Safety NOC", status: "Expired", risk: "High" },
  { name: "Pollution Control Board NOC", status: "Missing", risk: "High" },
  { name: "Lift Safety Clearance", status: "Available", risk: "Low" },
  { name: "Audited Financials (Past 3 Yrs)", status: "Incomplete", risk: "High" },
];

const vendorLiabilities = [
  { vendor: "Elevate Lifts Co.", service: "Lift AMC", amountDue: "₹4,50,000", contractStatus: "Missing" },
  { vendor: "ClearWater Solutions", service: "STP Maintenance", amountDue: "₹1,20,000", contractStatus: "Expired" },
  { vendor: "SecureGuard", service: "Security Deployment", amountDue: "₹8,00,000", contractStatus: "Active" },
  { vendor: "GreenScapes", service: "Horticulture", amountDue: "₹0", contractStatus: "Missing" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="destructive" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">Audit Mode</Badge>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Sector 77, Gurgaon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">RWA Financial Handover Audit</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Comprehensive analysis of deficits, missing statutory documentation, and pending liabilities identified during the handover from the builder/outgoing body.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Total Identified Deficit</p>
            <p className="text-3xl font-mono font-bold text-destructive">₹1.06 Cr</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <TrendingDown size={40} className="text-destructive" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-destructive/80 font-medium">Missing Corpus Fund</CardDescription>
              <CardTitle className="text-2xl font-mono">₹45.0 L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Based on collection records vs transferred amount.</p>
            </CardContent>
          </Card>

          <Card className="border-warning/20 bg-warning/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Receipt size={40} className="text-warning" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-warning/80 font-medium">Unaccounted Maintenance</CardDescription>
              <CardTitle className="text-2xl font-mono">₹21.0 L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Collected at ₹3/sqft but lacking expense audit.</p>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20 bg-orange-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <HardHat size={40} className="text-orange-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-orange-500/80 font-medium">Pending Infra Work</CardDescription>
              <CardTitle className="text-2xl font-mono">₹32.0 L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Estimated cost to complete promised amenities.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <AlertTriangle size={40} className="text-blue-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-500/80 font-medium">Statutory Risk Level</CardDescription>
              <CardTitle className="text-2xl text-blue-500">Critical</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Missing CC, OC, and Fire NOC.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chart Section */}
          <Card className="lg:col-span-2 border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="text-destructive h-5 w-5" />
                Deficit Breakdown Analysis
              </CardTitle>
              <CardDescription>Major financial loopholes identified in handover audit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={deficitData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tickFormatter={(value) => `₹${value/100000}L`} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={120} />
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
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileWarning className="text-warning h-5 w-5" />
                Statutory Compliance
              </CardTitle>
              <CardDescription>Missing documents risk RERA penalties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documentStatus.map((doc, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-lg bg-muted/30 border border-border/30">
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
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
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

        {/* Liabilities Table */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileX2 className="h-5 w-5 text-muted-foreground" />
              Vendor Liabilities & Missing AMC Contracts
            </CardTitle>
            <CardDescription>Operational risks left by outgoing body due to missing service agreements and unpaid dues.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border border-border/40">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Vendor / Agency</TableHead>
                    <TableHead>Service Area</TableHead>
                    <TableHead>Outstanding Dues</TableHead>
                    <TableHead>Contract Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendorLiabilities.map((liability, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{liability.vendor}</TableCell>
                      <TableCell>{liability.service}</TableCell>
                      <TableCell className="font-mono text-destructive">{liability.amountDue}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="secondary"
                          className={
                            liability.contractStatus === "Missing" ? "bg-destructive/10 text-destructive hover:bg-destructive/20" :
                            liability.contractStatus === "Expired" ? "bg-warning/10 text-warning hover:bg-warning/20" :
                            "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                          }
                        >
                          {liability.contractStatus}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
